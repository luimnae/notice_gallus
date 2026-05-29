/* Interactive notice navigator — progressive enhancement over server-rendered
   markup. Method chips → step rail → one step card at a time, with check-off,
   progress, auto-advance and localStorage persistence. CSP-safe (bundled). */

type DoneMap = Record<string, Record<number, boolean>>;
interface NoticeState {
  method: string;
  done: DoneMap;
}

const LS = 'gallus.notice.v1';
const AUTO_ADVANCE = true;

function loadAll(): Record<string, NoticeState> {
  try {
    return JSON.parse(localStorage.getItem(LS) || '{}') as Record<string, NoticeState>;
  } catch {
    return {};
  }
}
function saveAll(data: Record<string, NoticeState>): void {
  try {
    localStorage.setItem(LS, JSON.stringify(data));
  } catch {
    /* storage unavailable — non-fatal */
  }
}

function initNotice(root: HTMLElement): void {
  const slug = root.dataset.notice;
  if (!slug) return;

  const chips = Array.from(root.querySelectorAll<HTMLElement>('.chip[data-method]'));
  const bodies = Array.from(root.querySelectorAll<HTMLElement>('[data-method-body]'));
  if (!bodies.length) return;

  const store = loadAll();
  const persisted: NoticeState = store[slug] || { method: root.dataset.defaultMethod || '', done: {} };
  let activeMethod = bodies.some((b) => b.dataset.methodBody === persisted.method)
    ? persisted.method
    : bodies[0].dataset.methodBody!;
  let activeStep = 0;
  const done: DoneMap = persisted.done || {};

  const bodyOf = (id: string) => bodies.find((b) => b.dataset.methodBody === id)!;
  const cardsOf = (body: HTMLElement) => Array.from(body.querySelectorAll<HTMLElement>('[data-card]'));
  const doneOf = (id: string): Record<number, boolean> => (done[id] = done[id] || {});
  const totalOf = (id: string) => cardsOf(bodyOf(id)).length;
  const doneCountOf = (id: string) => {
    const d = doneOf(id);
    return Object.keys(d).filter((k) => d[Number(k)]).length;
  };
  const isComplete = (id: string) => doneCountOf(id) === totalOf(id) && totalOf(id) > 0;

  function persist(): void {
    const all = loadAll();
    all[slug!] = { method: activeMethod, done };
    saveAll(all);
  }

  function render(): void {
    // chips
    for (const c of chips) {
      const id = c.dataset.method!;
      c.classList.toggle('is-active', id === activeMethod);
      c.classList.toggle('is-complete', isComplete(id));
    }
    // method bodies
    for (const b of bodies) b.classList.toggle('is-hidden', b.dataset.methodBody !== activeMethod);

    const body = bodyOf(activeMethod);
    const cards = cardsOf(body);
    const total = cards.length;
    const d = doneOf(activeMethod);
    if (activeStep > total - 1) activeStep = total - 1;
    if (activeStep < 0) activeStep = 0;

    // step cards
    cards.forEach((card, i) => card.classList.toggle('is-hidden', i !== activeStep));

    // rail
    const rail = body.querySelector('[data-rail]');
    if (rail) {
      rail.querySelectorAll<HTMLElement>('.rail__item[data-step]').forEach((item) => {
        const i = Number(item.dataset.step);
        item.classList.toggle('is-active', i === activeStep);
        item.classList.toggle('is-done', !!d[i]);
      });
    }

    // progress (native <progress> — value is an attribute, CSP-safe)
    const count = doneCountOf(activeMethod);
    const bar = body.querySelector<HTMLProgressElement>('[data-prog]');
    if (bar) {
      bar.max = total;
      bar.value = count;
    }
    const countEl = body.querySelector<HTMLElement>('[data-prog-count]');
    if (countEl) countEl.textContent = `${count} / ${String(total).padStart(2, '0')} étapes`;
    const reset = body.querySelector<HTMLElement>('[data-reset]');
    if (reset) reset.hidden = count === 0;

    // active card foot
    const card = cards[activeStep];
    if (card) {
      const prev = card.querySelector<HTMLButtonElement>('[data-prev]');
      const next = card.querySelector<HTMLButtonElement>('[data-next]');
      const check = card.querySelector<HTMLElement>('[data-check]');
      if (prev) prev.disabled = activeStep === 0;
      if (next) next.disabled = activeStep === total - 1;
      if (check) {
        const isDone = !!d[activeStep];
        check.classList.toggle('is-done', isDone);
        const label = check.querySelector('.btn__check-label');
        if (label) label.textContent = isDone ? 'Étape terminée' : 'Marquer terminée';
      }
    }
  }

  function setMethod(id: string): void {
    activeMethod = id;
    activeStep = 0;
    persist();
    render();
    const top = root.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }
  function setStep(i: number): void {
    activeStep = i;
    render();
  }
  function toggleDone(): void {
    const d = doneOf(activeMethod);
    const total = totalOf(activeMethod);
    d[activeStep] = !d[activeStep];
    persist();
    const advancing = d[activeStep] && activeStep < total - 1 && AUTO_ADVANCE;
    render();
    if (advancing) window.setTimeout(() => setStep(activeStep + 1), 280);
  }
  function resetMethod(): void {
    done[activeMethod] = {};
    activeStep = 0;
    persist();
    render();
  }

  root.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const chip = t.closest<HTMLElement>('.chip[data-method]');
    if (chip && root.contains(chip)) return setMethod(chip.dataset.method!);
    const railItem = t.closest<HTMLElement>('.rail__item[data-step]');
    if (railItem) return setStep(Number(railItem.dataset.step));
    if (t.closest('[data-prev]')) return setStep(Math.max(0, activeStep - 1));
    if (t.closest('[data-next]')) return setStep(Math.min(totalOf(activeMethod) - 1, activeStep + 1));
    if (t.closest('[data-check]')) return toggleDone();
    if (t.closest('[data-reset]')) return resetMethod();
  });

  render();
}

document.documentElement.classList.add('js');
document.querySelectorAll<HTMLElement>('.notice[data-notice]').forEach(initNotice);
