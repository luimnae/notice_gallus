/* =====================================================================
   GALLUS · NOTICES — Structured content (FR verbatim from source docx)
   Ported from window.SITE — typed TypeScript data module.
   ===================================================================== */

export interface Item {
  text: string;
  sub?: string[];
}

export interface Step {
  title: string;
  badge?: string;
  items: Item[];
  notes?: string[];
  warnings?: string[];
  /** Technical diagrams that illustrate this specific step. */
  images?: string[];
}

export interface Tools {
  outillage: string[];
  fournitures: string[];
}

export interface Method {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  group?: string;
  intro?: string;
  diffNote?: string;
  amplitude?: string;
  image?: string;
  /** Method header illustration (product photo or technical cross-section). */
  hero?: string;
  heroKind?: 'photo' | 'diagram';
  problem?: string;
  objective?: string;
  toolsLine?: string;
  tools?: Tools;
  steps: Step[];
}

export interface Diagnostic {
  title: string;
  head: string[];
  rows: string[][];
}

export interface SeqTable {
  title: string;
  note: string;
  head: string[];
  rows: string[][];
  warning: string;
}

export interface Escalation {
  title: string;
  intro: string;
  items: string[];
}

export interface Doc {
  slug: string;
  num: string;
  kicker: string;
  title: string;
  subtitle: string;
  lead: string;
  selectorLabel: string;
  globalWarnings?: string[];
  diagnostics?: Diagnostic[];
  methods: Method[];
  sequence?: SeqTable;
  escalation?: Escalation;
}

export const site: Record<"pose" | "occultation" | "reglage", Doc> = {
  /* ========================================================= POSE ===== */
  pose: {
    slug: "pose",
    num: "01",
    kicker: "Notice de pose",
    title: "Pose menuiserie extérieure",
    subtitle: "Fixation du dormant et étanchéité — fenêtre ouverture à la française.",
    lead: "Quatre méthodes de pose selon la configuration du mur. Chaque méthode suit la même logique : préparer, caler, régler, fixer, étancher, contrôler.",
    selectorLabel: "Méthode de pose",
    methods: [
      {
        id: "applique",
        tag: "Applique intérieure",
        title: "Pose en applique intérieure",
        subtitle: "Fixation par pattes — compribande sur tableau",
        hero: "/img/pose-applique.webp",
        heroKind: "diagram",
        tools: {
          outillage: [
            "Niveau à bulle de 1 m",
            "Perceuse-visseuse + forets béton adaptés au support",
            "Pistolet à silicone",
            "Cales plastique d'assise et latérales",
            "Crayon, mètre, équerre",
            "Cutter, spatule, raclette",
            "Ruban de masquage",
            "Alcool isopropylique",
            "Lunettes + gants de protection",
          ],
          fournitures: [
            "Compribande : plage 4–11 mm, largeur 15 mm, longueur 112 mm",
            "Pattes de fixation",
            "Chevilles adaptées au support + vis inox",
            "Silicone neutre ou acétique selon support",
            "Cales plastique non compressibles",
          ],
        },
        steps: [
          {
            title: "Préparation de la fenêtre",
            images: ["/img/pose-applique-s1.webp"],
            items: [
              { text: "Consulter l'étiquette collée sur le dormant — elle indique la référence et la position exacte de chaque patte." },
              {
                text: "Fixer les pattes sur le dormant, à plat avant toute manutention :",
                sub: [
                  "1ère patte à maximum 152 mm de chaque angle du dormant",
                  "Espacement maximum entre deux pattes : 800 mm",
                  "En présence d'un coffre de volet roulant : doubler les pattes en haut des montants (traverse haute inaccessible)",
                  "En présence d'un meneau ou montant intermédiaire : doubler les pattes en partie haute et basse au niveau du meneau",
                ],
              },
              { text: "Orienter les pattes perpendiculairement au dormant, côté tableau, de façon à ce qu'elles dépassent pour être vissées dans le mur." },
              { text: "Vérifier que toutes les pattes sont bien serrées — aucune ne doit bouger." },
            ],
          },
          {
            title: "Pose de la compribande sur le mur",
            images: [
              "/img/pose-applique-s2.webp",
              "/img/pose-applique-s3.webp",
              "/img/pose-applique-s4.webp",
              "/img/pose-applique-s5.webp",
              "/img/pose-applique-s6.webp",
            ],
            items: [
              { text: "Nettoyer le tableau de baie : poussières, résidus, traces d'huile — support propre et sec." },
              { text: "Positionner la compribande entre 3 et 7 mm du bord du tableau — ni trop près du bord (risque de décollement) ni trop loin (compression insuffisante)." },
              { text: "Coller la compribande sur le nu intérieur du mur — bas, côtés, haut — tour complet sans interruption." },
              { text: "Couper les angles à 45° pour assurer la continuité du joint." },
              { text: "La compribande ne doit pas être interrompue en partie basse." },
              { text: "Présenter la fenêtre immédiatement — la mousse gonfle à l'air libre." },
            ],
            notes: ["Notre compribande : plage 4–11 mm, largeur 15 mm, longueur 112 mm. Comprimée dans cette plage une fois le dormant en appui. Position : 3 à 7 mm du bord."],
            warnings: ["Ne pas laisser la compribande à l'air libre trop longtemps — elle gonfle rapidement et ne rentrerait plus dans le jeu."],
          },
          {
            title: "Mise en place et calage",
            items: [
              { text: "Poser des cales d'assise plastique dures sur le seuil : 2 cales à 1/4 de la largeur depuis chaque extrémité." },
              { text: "Ajouter une cale centrale si la largeur dépasse ~100 cm ou si risque de fléchissement du dormant." },
              { text: "Introduire la fenêtre dans la baie par l'intérieur — le dormant vient s'appuyer contre la compribande." },
              { text: "Appuyer uniformément sur tout le pourtour pour comprimer la compribande." },
              { text: "Maintenir le châssis en position (béquille, cale provisoire ou binôme) pendant les réglages." },
            ],
            warnings: ["Cales plastique non compressibles uniquement. Ne jamais caler en bois — se tasse avec l'humidité."],
          },
          {
            title: "Réglage de la fenêtre",
            items: [
              { text: "Horizontalité de la traverse basse au niveau à bulle — ajuster les cales d'assise." },
              { text: "Aplomb des montants au niveau à bulle posé contre chaque côté." },
              { text: "Cales latérales pour corriger un défaut de verticalité." },
              { text: "Absence de voilement : règle à plat sur les deux montants — elle ne doit pas basculer." },
              { text: "Immobiliser provisoirement le châssis une fois les réglages validés." },
            ],
            notes: ["Tolérances : horizontalité ±1 mm/m — aplomb ±1 mm/m — voilement 0 mm."],
          },
          {
            title: "Fixation au mur par pattes",
            items: [
              { text: "Marquer au crayon l'emplacement de chaque trou à travers les orifices des pattes." },
              { text: "Percer le mur à travers chaque patte — foret béton adapté au support." },
              { text: "Choisir la cheville adaptée : à frapper pour béton plein, à expansion pour parpaing creux." },
              { text: "Mettre en place les chevilles." },
              { text: "Visser les pattes au mur — serrage progressif sans forcer." },
              { text: "Re-vérifier aplomb et niveau après serrage complet." },
            ],
            notes: ["Ordre : fixations basses en premier, puis côtés en remontant, puis haut. Serrer en opposition (diagonale) pour éviter les déformations."],
          },
          {
            title: "Étanchéité extérieure",
            items: [
              { text: "Retirer les coulisses si elles bloquent l'accès aux zones à traiter." },
              { text: "Dégraisser l'angle dormant/tableau extérieur à l'alcool isopropylique." },
              { text: "Masquer les deux rives avec du ruban de masquage." },
              { text: "Appliquer le silicone sur les côtés et le haut — cordon continu." },
              { text: "En partie basse : s'arrêter à minimum 15 mm de la goutte d'eau — la laisser dégagée." },
              { text: "Lisser à la spatule ou au doigt humide — congé à 45°." },
              { text: "Retirer les rubans immédiatement après lissage." },
              { text: "Reposer les coulisses retirées." },
            ],
            warnings: [
              "Goutte d'eau : ne jamais obturer. Un joint continu en bas annule la rupture de capillarité — minimum 15 mm dégagés.",
              "Compribande : ne jamais recouvrir de silicone — elle doit rester libre.",
            ],
          },
          {
            title: "Étanchéité intérieure",
            items: [
              { text: "Dégraisser l'angle dormant/tableau intérieur." },
              { text: "Masquer les rives." },
              { text: "Appliquer un cordon continu de silicone sur tout le pourtour intérieur." },
              { text: "Lisser proprement." },
              { text: "Retirer les rubans immédiatement." },
              { text: "Option : profil couvre-joint PVC ou alu si jonction irrégulière." },
            ],
            notes: ["L'étanchéité à l'air intérieure doit être plus continue que l'extérieure — aucune interruption admise."],
          },
          {
            title: "Contrôles finaux et nettoyage",
            items: [
              { text: "Régler charnières : parallélisme des vantaux, compression du joint périmétrique." },
              { text: "Ajuster les galets de fermeture (crémones)." },
              { text: "Tester chaque vantail : sans effort, sans jeu, joint comprimé." },
              { text: "Retirer les films de protection." },
              { text: "Nettoyer les traces de silicone." },
              { text: "Vérifier la continuité des cordons extérieur et intérieur." },
              { text: "Vérifier que la goutte d'eau est dégagée — aucun résidu." },
            ],
          },
        ],
      },
      {
        id: "tunnel-ext",
        tag: "Tunnel · nu extérieur",
        title: "Pose en tunnel — nu extérieur",
        subtitle: "Vissage direct à travers le dormant — compribande sur dormant",
        hero: "/img/pose-tunnel-ext.webp",
        heroKind: "diagram",
        tools: {
          outillage: [
            "Niveau à bulle de 1 m",
            "Perceuse-visseuse + forets béton + foret bois",
            "Pistolet à silicone",
            "Cales plastique d'assise et latérales",
            "Crayon, mètre, équerre",
            "Cutter, spatule, raclette",
            "Ruban de masquage + alcool isopropylique",
            "Bouchons / capuchons de tête de vis",
            "Lunettes + gants",
          ],
          fournitures: [
            "Compribande : plage 4–11 mm, largeur 15 mm, longueur 112 mm",
            "Chevilles adaptées au support + vis inox",
            "Silicone neutre ou acétique selon support",
            "Cales plastique non compressibles",
          ],
        },
        steps: [
          {
            title: "Préparation de la fenêtre",
            images: ["/img/pose-tunnel-ext-s1.webp", "/img/pose-tunnel-ext-s2.webp"],
            items: [
              { text: "Positionner la compribande entre 3 et 7 mm du bord du dormant." },
              { text: "Coller la compribande sur les 4 faces du dormant — bas, côtés, haut — tour complet sans interruption." },
              { text: "Couper les angles à 45° pour assurer la continuité du joint." },
              { text: "La compribande ne doit pas être interrompue en partie basse." },
              { text: "Présenter la fenêtre immédiatement — la mousse gonfle à l'air libre." },
            ],
            notes: ["Notre compribande : plage 4–11 mm, largeur 15 mm, longueur 112 mm. Position : 3 à 7 mm du bord du dormant."],
            warnings: ["Ne pas laisser la compribande à l'air libre trop longtemps."],
          },
          {
            title: "Mise en place et calage",
            items: [
              { text: "Poser des cales d'assise : 2 cales à 1/4 de la largeur + 1 centrale si largeur > ~100 cm." },
              { text: "Introduire la fenêtre dans le tunnel depuis l'extérieur et la pousser vers le nu extérieur — le dormant affleure ou dépasse légèrement le nu façade." },
              { text: "Appuyer uniformément pour comprimer la compribande." },
              { text: "Maintenir le châssis pendant les réglages." },
            ],
          },
          {
            title: "Réglage de la fenêtre",
            items: [
              { text: "Horizontalité de la traverse basse — ajuster les cales." },
              { text: "Aplomb des montants au niveau à bulle." },
              { text: "Cales latérales pour corriger." },
              { text: "Absence de voilement : règle à plat sur les montants." },
              { text: "Immobiliser provisoirement." },
            ],
            notes: ["Tolérances : horizontalité ±1 mm/m — aplomb ±1 mm/m — voilement 0 mm."],
          },
          {
            title: "Fixation au mur — vissage direct",
            images: ["/img/pose-tunnel-ext-s3.webp"],
            items: [
              {
                text: "Repérer les points de vissage :",
                sub: [
                  "Montants gauche et droit + traverse haute si pas de coffre",
                  "152 mm max depuis chaque angle du dormant pour la 1ère fixation",
                  "Espacement maximum : 800 mm",
                  "En présence d'un meneau : doubler les fixations en partie haute et basse au niveau du meneau",
                ],
              },
              { text: "Pré-percer le dormant depuis l'intérieur avec un foret bois." },
              { text: "Percer le mur dans la continuité avec un foret béton." },
              { text: "Mettre en place les chevilles." },
              { text: "Visser à travers le dormant — serrage progressif." },
              { text: "Boucher les têtes de vis avec les capuchons de finition." },
              { text: "Re-vérifier aplomb et niveau après serrage complet." },
            ],
            warnings: ["Coffre de volet roulant : pas de fixation en traverse haute — doubler les fixations en haut des montants."],
          },
          {
            title: "Étanchéité extérieure",
            items: [
              { text: "Retirer les coulisses si elles bloquent l'accès." },
              { text: "Dégraisser à l'alcool isopropylique." },
              { text: "Masquer les rives." },
              { text: "Silicone sur les côtés et le haut — cordon continu." },
              { text: "En partie basse : s'arrêter à minimum 15 mm de la goutte d'eau." },
              { text: "Lisser — congé à 45°." },
              { text: "Retirer les rubans immédiatement." },
              { text: "Reposer les coulisses." },
            ],
            warnings: [
              "Goutte d'eau : minimum 15 mm dégagés — ne jamais obturer.",
              "Compribande : ne jamais recouvrir de silicone.",
            ],
          },
          {
            title: "Étanchéité intérieure",
            items: [
              { text: "Dégraisser l'angle dormant/tableau intérieur." },
              { text: "Masquer les rives." },
              { text: "Cordon continu de silicone sur tout le pourtour intérieur." },
              { text: "Lisser proprement." },
              { text: "Retirer les rubans immédiatement." },
              { text: "Option : profil couvre-joint si nécessaire." },
            ],
          },
          {
            title: "Contrôles finaux et nettoyage",
            items: [
              { text: "Régler charnières et crémones." },
              { text: "Tester chaque vantail." },
              { text: "Retirer les films de protection." },
              { text: "Nettoyer les traces de silicone." },
              { text: "Vérifier continuité des cordons, goutte d'eau dégagée, têtes de vis bouchonnées." },
            ],
          },
        ],
      },
      {
        id: "tunnel-int",
        tag: "Tunnel · nu intérieur",
        title: "Pose en tunnel — nu intérieur",
        subtitle: "Vissage direct à travers le dormant — compribande sur dormant",
        hero: "/img/pose-tunnel-ext.webp",
        heroKind: "diagram",
        diffNote: "Toutes les étapes sont identiques au tunnel nu extérieur, à l'exception de l'étape de mise en place et de l'attention portée à l'étanchéité extérieure ci-dessous.",
        steps: [
          {
            title: "Mise en place et calage",
            badge: "Version nu intérieur",
            items: [
              { text: "Poser des cales d'assise : 2 cales à 1/4 de la largeur + 1 centrale si largeur > ~100 cm." },
              { text: "Introduire la fenêtre dans le tunnel depuis l'extérieur et la pousser vers le nu intérieur — le dormant affleure le nu intérieur du mur." },
              { text: "Appuyer uniformément pour comprimer la compribande." },
              { text: "Maintenir le châssis pendant les réglages." },
            ],
          },
          {
            title: "Étanchéité extérieure",
            badge: "Attention particulière",
            items: [
              { text: "Le tableau extérieur est plus profond — le cordon de silicone doit remonter sur toute la hauteur du tableau visible côté façade." },
              { text: "Soigner particulièrement la continuité dans les angles bas du tableau." },
            ],
            notes: ["Toutes les autres étapes (préparation compribande, réglage, fixation, étanchéité intérieure, contrôles) sont strictement identiques au nu extérieur."],
          },
        ],
      },
      {
        id: "feuillure",
        tag: "Feuillure",
        title: "Pose en feuillure",
        subtitle: "Vissage direct à travers le dormant — compribande dans la feuillure",
        hero: "/img/pose-feuillure.webp",
        heroKind: "diagram",
        tools: {
          outillage: [
            "Niveau à bulle de 1 m",
            "Perceuse-visseuse + forets béton + foret bois",
            "Pistolet à silicone",
            "Cales plastique d'assise et latérales",
            "Crayon, mètre, équerre",
            "Cutter, spatule, raclette",
            "Ruban de masquage + alcool isopropylique",
            "Bouchons / capuchons de tête de vis",
            "Lunettes + gants",
          ],
          fournitures: [
            "Compribande : plage 4–11 mm, largeur 15 mm, longueur 112 mm",
            "Chevilles adaptées au support + vis inox",
            "Silicone neutre ou acétique selon support",
            "Cales plastique non compressibles",
          ],
        },
        steps: [
          {
            title: "Préparation de la feuillure",
            items: [
              { text: "Nettoyer la feuillure : poussières, résidus d'ancienne mousse ou de silicone, parties friables — support propre et sec." },
              { text: "Positionner la compribande entre 3 et 7 mm du bord de la feuillure — ni trop près du bord (décollement) ni trop en fond (compression insuffisante)." },
              { text: "Coller la compribande dans la feuillure (sur le mur) — bas, côtés, haut — tour complet sans interruption." },
              { text: "Couper les angles à 45° pour assurer la continuité." },
              { text: "La compribande ne doit pas être interrompue en partie basse." },
              { text: "Présenter la fenêtre immédiatement — la mousse gonfle à l'air libre." },
            ],
            notes: ["Notre compribande : plage 4–11 mm, largeur 15 mm, longueur 112 mm. Position : 3 à 7 mm du bord de la feuillure."],
            warnings: ["Ne pas laisser la compribande à l'air libre trop longtemps."],
          },
          {
            title: "Mise en place et calage",
            items: [
              { text: "Poser des cales d'assise : 2 cales à 1/4 de la largeur + 1 centrale si largeur > ~100 cm." },
              { text: "Introduire la fenêtre dans la feuillure — le dormant vient s'appuyer contre la compribande sur les 4 faces." },
              { text: "Appuyer uniformément pour comprimer la compribande." },
              { text: "Maintenir le châssis pendant les réglages." },
            ],
          },
          {
            title: "Réglage de la fenêtre",
            items: [
              { text: "Horizontalité de la traverse basse — ajuster les cales." },
              { text: "Aplomb des montants au niveau à bulle." },
              { text: "Cales latérales pour corriger." },
              { text: "Absence de voilement : règle à plat sur les montants." },
              { text: "Immobiliser provisoirement." },
            ],
            notes: ["Tolérances : horizontalité ±1 mm/m — aplomb ±1 mm/m — voilement 0 mm."],
          },
          {
            title: "Fixation au mur — vissage direct",
            items: [
              {
                text: "Repérer les points de vissage :",
                sub: [
                  "Montants gauche et droit + traverse haute si pas de coffre",
                  "152 mm max depuis chaque angle du dormant pour la 1ère fixation",
                  "Espacement maximum : 800 mm",
                  "En présence d'un meneau : doubler les fixations en partie haute et basse au niveau du meneau",
                ],
              },
              { text: "Pré-percer le dormant depuis l'intérieur avec un foret bois." },
              { text: "Percer le mur dans la continuité avec un foret béton." },
              { text: "Mettre en place les chevilles." },
              { text: "Visser à travers le dormant — serrage progressif." },
              { text: "Boucher les têtes de vis avec les capuchons de finition." },
              { text: "Re-vérifier aplomb et niveau après serrage complet." },
            ],
            warnings: ["Coffre de volet roulant : pas de fixation en traverse haute — doubler les fixations en haut des montants."],
          },
          {
            title: "Étanchéité extérieure",
            items: [
              { text: "Retirer les coulisses si elles bloquent l'accès." },
              { text: "Dégraisser à l'alcool isopropylique." },
              { text: "Masquer les rives." },
              { text: "Silicone sur les côtés et le haut — cordon continu." },
              { text: "En partie basse : s'arrêter à minimum 15 mm de la goutte d'eau." },
              { text: "Lisser — congé à 45°." },
              { text: "Retirer les rubans immédiatement." },
              { text: "Reposer les coulisses." },
            ],
            warnings: [
              "Goutte d'eau : minimum 15 mm dégagés — ne jamais obturer.",
              "Compribande : ne jamais recouvrir de silicone.",
            ],
          },
          {
            title: "Étanchéité intérieure",
            items: [
              { text: "Dégraisser l'angle dormant/feuillure intérieur." },
              { text: "Masquer les rives." },
              { text: "Cordon continu de silicone sur tout le pourtour intérieur." },
              { text: "Lisser proprement." },
              { text: "Retirer les rubans immédiatement." },
              { text: "Option : profil couvre-joint si nécessaire." },
            ],
          },
          {
            title: "Contrôles finaux et nettoyage",
            items: [
              { text: "Régler charnières et crémones." },
              { text: "Tester chaque vantail." },
              { text: "Retirer les films de protection." },
              { text: "Nettoyer les traces de silicone." },
              { text: "Vérifier continuité des cordons, goutte d'eau dégagée, têtes de vis bouchonnées." },
            ],
          },
        ],
      },
    ],
  },

  /* ================================================== OCCULTATION ===== */
  occultation: {
    slug: "occultation",
    num: "02",
    kicker: "Notice de pose",
    title: "Occultations & protections",
    subtitle: "Volets roulants, battants, coulissants et brise-soleil orientables.",
    lead: "Cinq systèmes d'occultation, posés après fenêtre. La fenêtre doit être définitivement posée, réglée et étanchée avant toute intervention.",
    selectorLabel: "Système d'occultation",
    methods: [
      {
        id: "coffre-vr",
        tag: "Volet roulant",
        title: "Coffre volet roulant",
        subtitle: "Électrique et manuel — fixation sur dormant, pose après fenêtre",
        hero: "/img/occ-volet-roulant.webp",
        heroKind: "photo",
        tools: {
          outillage: [
            "Perceuse-visseuse + forets adaptés",
            "Niveau à bulle",
            "Mètre, crayon, équerre",
            "Tournevis plat et cruciforme",
            "Cutter",
            "Lunettes + gants",
          ],
          fournitures: [
            "Vis de fixation coffre sur dormant (fournies avec le coffre)",
            "Silicone neutre pour étanchéité coffre/mur",
            "Ruban de masquage + alcool isopropylique",
          ],
        },
        intro: "Électrique vs manuel : la procédure de pose est identique. La seule différence est la présence d'un câble électrique à raccorder côté électrique — prévoir son passage avant la pose du coffre.",
        steps: [
          {
            title: "Vérification avant pose",
            items: [
              { text: "Contrôler la livraison : coffre, tablier, coulisses, axe, câble électrique (si motorisé) ou système de manœuvre (sangle/manivelle)." },
              { text: "Vérifier que le moteur ou l'axe manuel est bien positionné dans le coffre." },
              { text: "Version électrique : s'assurer que le câble est sorti du coffre et accessible depuis l'intérieur — prévoir la gaine ou le passage de câble dans le mur avant pose." },
              { text: "Vérifier que la fenêtre est définitivement posée, réglée et étanchée avant toute intervention sur le coffre." },
            ],
          },
          {
            title: "Pose des coulisses",
            items: [
              { text: "Positionner les coulisses de chaque côté de la baie, sur le dormant latéral ou en tableau selon la config." },
              { text: "Vérifier l'aplomb de chaque coulisse au niveau à bulle." },
              { text: "Vérifier l'écartement entre les deux coulisses : doit correspondre exactement à la largeur du tablier." },
              { text: "Fixer les coulisses — vissage sur le dormant ou chevillage dans le tableau." },
              { text: "Vérifier que les coulisses sont parallèles entre elles sur toute leur hauteur." },
            ],
          },
          {
            title: "Pose du coffre",
            items: [
              { text: "Présenter le coffre au-dessus de la fenêtre, en appui sur la traverse haute du dormant." },
              { text: "Vérifier le niveau du coffre au niveau à bulle." },
              { text: "Vérifier l'alignement avec les coulisses — le tablier doit descendre librement dans les coulisses sans frotter." },
              { text: "Visser le coffre sur le dormant selon les points de fixation prévus — serrage progressif." },
              { text: "Re-contrôler niveau et alignement après serrage de chaque vis." },
            ],
            warnings: ["Le coffre ne doit jamais déverser vers l'intérieur — risque d'altérer l'étanchéité avec le gros œuvre. Si c'est le cas, prévoir une reprise dans le plafond via la face haute du coffre."],
          },
          {
            title: "Pose du tablier",
            items: [
              { text: "Engager le tablier dans les coulisses par le haut, lame par lame si nécessaire." },
              { text: "Vérifier le bon enroulement sur l'axe — pas de chevauchement de lames." },
              { text: "Descendre manuellement sur quelques tours pour vérifier le coulissement libre dans les deux coulisses." },
              { text: "Vérifier que le tablier est bien centré — jeu identique des deux côtés." },
            ],
          },
          {
            title: "Système de manœuvre",
            items: [
              {
                text: "Version électrique :",
                sub: [
                  "Faire intervenir un électricien qualifié pour le raccordement du moteur au réseau.",
                  "Raccorder le câble moteur selon le schéma fabricant.",
                  "Poser l'interrupteur mural ou le récepteur de télécommande.",
                  "Ne pas mettre sous tension avant que le tablier soit correctement engagé dans les coulisses.",
                ],
              },
              {
                text: "Version manuelle — sangle :",
                sub: [
                  "Engager la sangle dans le passant du coffre.",
                  "Vérifier la longueur : manœuvre confortable depuis le sol — couper l'excédent.",
                  "Fixer l'enrouleur de sangle sur le mur intérieur à hauteur souhaitée.",
                  "Engager la sangle dans l'enrouleur.",
                ],
              },
              {
                text: "Version manuelle — manivelle/tringle :",
                sub: [
                  "Fixer le support de manivelle sur le mur ou le dormant à hauteur de manœuvre.",
                  "Engager la tringle dans l'axe du volet et dans le support.",
                  "Vérifier la rotation libre sans jeu excessif.",
                ],
              },
            ],
          },
          {
            title: "Réglages",
            items: [
              {
                text: "Version électrique :",
                sub: [
                  "Mettre sous tension et effectuer un premier test — descente lente, observer le comportement.",
                  "Régler la fin de course basse : le tablier s'arrête lorsque les lames basses touchent le seuil — sans forcer.",
                  "Régler la fin de course haute : le tablier s'arrête complètement enroulé — sans cogner.",
                  "Effectuer plusieurs cycles complets montée/descente pour valider.",
                ],
              },
              {
                text: "Version manuelle :",
                sub: [
                  "Tester la descente : tablier libre sans forcer dans les coulisses.",
                  "Régler le limiteur de descente si présent — tablier s'arrête en bas sans forcer sur le seuil.",
                  "Tester la remontée : effort raisonnable — si trop lourd, vérifier le ressort de rappel de l'axe.",
                  "Effectuer plusieurs cycles pour valider.",
                ],
              },
            ],
            warnings: ["Fin de course mal réglée : un tablier qui force en butée basse gondole les lames ou endommage le moteur. Un tablier qui remonte trop haut sort des coulisses."],
          },
          {
            title: "Étanchéité coffre",
            items: [
              { text: "Appliquer un cordon de silicone à la jonction coffre/mur côté extérieur — côtés et dessus." },
              { text: "Lisser proprement." },
              { text: "Vérifier l'étanchéité côté intérieur — jointoyer si nécessaire." },
            ],
          },
          {
            title: "Contrôles finaux",
            items: [
              { text: "Tester montée et descente complètes plusieurs fois." },
              { text: "Vérifier l'absence de bruits anormaux (frottement, claquement de lames)." },
              { text: "Vérifier que le tablier ne sort pas des coulisses en position haute." },
              { text: "Vérifier les fins de course haute et basse." },
              { text: "Nettoyer les coulisses de tout résidu de chantier." },
              { text: "Remettre le cache ou habillage intérieur du coffre si prévu." },
            ],
          },
        ],
      },
      {
        id: "programmation",
        tag: "Programmation moteur",
        title: "Programmation de la commande",
        subtitle: "Volet roulant motorisé radio — réinitialisation, appairage, fins de course",
        hero: "/img/somfy-emetteur.webp",
        heroKind: "photo",
        intro:
          "Commande radio. Repères de l'émetteur : 1 Allumer / Éteindre · 2 Mode de fonctionnement du moteur · 3 Connexion de la commande au moteur · 4 Signal lumineux · 5 Pile. Sur la télécommande de manœuvre : 1 Monter · 2 Descente · 3 Arrêt.",
        steps: [
          {
            title: "Réinitialiser le moteur",
            items: [
              { text: "N'alimenter que le volet concerné par l'installation de la commande — ne pas alimenter tous les moteurs en même temps." },
              { text: "Alimenter le moteur pendant 8 secondes." },
              { text: "Couper l'alimentation pendant 2 secondes." },
              { text: "Alimenter le moteur." },
            ],
            notes: ["Validation de l'étape : le tablier descend."],
          },
          {
            title: "Connecter la commande au moteur",
            items: [
              { text: "Appuyer sur « ON/OFF » jusqu'à voir le signal lumineux (4)." },
              { text: "Appuyer 6 fois rapidement sur « Mode » (2)." },
              { text: "Appuyer sur « PROG » (3) pendant 2 secondes." },
            ],
            notes: [
              "Validation : le signal lumineux (4) clignote 1 fois en rouge, puis le tablier bouge.",
            ],
            warnings: [
              "Mauvaise manipulation : si le signal lumineux clignote en vert ou plus d'une fois, refaire l'étape de réinitialisation du moteur.",
            ],
          },
          {
            title: "Programmer les fins de course",
            items: [
              { text: "Appuyer sur Monter (1) et Descente (2) en même temps pendant 5 secondes — le tablier bouge." },
              { text: "Rester appuyé sur Descente (2). Vers la fin, appuyer sur Arrêt (3) et ajuster par appuis ponctuels sur Descente (2) jusqu'à ce qu'il n'y ait plus de jour." },
              { text: "Enregistrer la fin de course basse : appuyer sur Arrêt (3) pendant 2 secondes — le tablier bouge (pas forcément visible)." },
              { text: "Rester appuyé sur Monter (1). Vers la fin, appuyer sur Arrêt (3) et ajuster par appuis ponctuels sur Monter (1) jusqu'au niveau de la façade." },
              { text: "Enregistrer la fin de course haute : appuyer sur Arrêt (3) pendant 2 secondes." },
            ],
            notes: [
              "Les tabliers / coulisses ne possèdent pas de système d'arrêt mécanique — cette étape est essentielle pour que le tablier ne s'enroule pas dans le coffre.",
              "Validation : le tablier bouge 2 fois (il monte, descend, monte, descend).",
            ],
          },
          {
            title: "Vérification",
            items: [
              { text: "Appuyer sur Descente (2) — le tablier descend lentement au début, puis rapidement, et ralentit en arrivant en fin de course." },
              { text: "Appuyer sur Monter (1) — le tablier monte lentement au début, puis rapidement, et ralentit en arrivant en fin de course." },
            ],
          },
        ],
      },
      {
        id: "battant",
        tag: "Volet battant",
        title: "Volet battant",
        subtitle: "Pose sur pentures — réglage 3 axes avant pose",
        hero: "/img/occ-battant.webp",
        heroKind: "photo",
        tools: {
          outillage: [
            "Perceuse-visseuse + forets béton et bois",
            "Niveau à bulle",
            "Mètre, crayon, équerre",
            "Clé plate ou clé allen (réglage pentures avant pose)",
            "Lunettes + gants",
          ],
          fournitures: [
            "Pentures (fournies)",
            "Vis inox + chevilles adaptées au support",
            "Système de fermeture (espagnolette, targette)",
            "Arrêts de volet ou crochets de maintien",
          ],
        },
        steps: [
          {
            title: "Vérification et préparation",
            items: [
              { text: "Contrôler la livraison : vantaux, pentures, système de fermeture, arrêts." },
              { text: "Vérifier l'état des vantaux : pas de déformation, gonflement ou éclat." },
              { text: "Identifier le sens d'ouverture et la position gauche/droite des pentures." },
            ],
          },
          {
            title: "Réglage des pentures avant pose",
            items: [
              { text: "Réglage en hauteur : ajuster la position verticale de la chape sur la platine — adapter à l'entraxe entre les points de fixation haut et bas." },
              { text: "Réglage latéral : ajuster le décalage gauche/droite pour que le volet fermé soit dans l'axe prévu." },
              { text: "Réglage en profondeur : ajuster l'écartement du vantail par rapport au mur pour le jeu de battement souhaité." },
              { text: "Bloquer tous les réglages avant de poser les pentures — vérifier que toutes les vis de blocage sont serrées." },
            ],
            warnings: ["Les pentures doivent être réglées AVANT d'être fixées sur le volet et sur le support. Une fois le volet en place et les pentures serrées, aucun réglage n'est possible."],
          },
          {
            title: "Pose des pentures",
            items: [
              {
                text: "Si fixation sur dormant de la fenêtre :",
                sub: [
                  "Positionner les pentures sur le dormant — minimum 2 par vantail, 3 si hauteur > 1,80 m.",
                  "Vérifier que les pentures sont à la même hauteur des deux côtés au niveau à bulle.",
                  "Visser les pentures sur le dormant — serrage progressif.",
                ],
              },
              {
                text: "Si fixation dans le tableau maçonnerie :",
                sub: [
                  "Repérer les emplacements sur le tableau latéral.",
                  "Percer et cheviller dans la maçonnerie.",
                  "Visser les platines des pentures.",
                ],
              },
            ],
          },
          {
            title: "Pose des vantaux",
            items: [
              { text: "Engager les vantaux sur les pentures — l'axe doit coulisser librement dans la chape." },
              { text: "Vérifier que les vantaux tournent librement — pas de frottement contre le mur, le tableau ou le dormant." },
              { text: "Vérifier le parallélisme des deux vantaux en position fermée." },
              { text: "Si le réglage est insuffisant (volet qui frotte ou jeu trop important) : déposer le vantail, dévisser les pentures, corriger le réglage, reposer." },
            ],
          },
          {
            title: "Pose du système de fermeture",
            items: [
              { text: "Poser l'espagnolette ou la targette sur le vantail actif." },
              { text: "Positionner et fixer la gâche — vérifier l'engagement sans forcer." },
              { text: "Poser les arrêts de volet ou crochets de maintien en position ouverte." },
            ],
          },
          {
            title: "Contrôles finaux",
            items: [
              { text: "Tester ouverture et fermeture complètes de chaque vantail." },
              { text: "Vérifier que la fermeture engage sans forcer." },
              { text: "Vérifier l'absence de frottement." },
              { text: "Vérifier le maintien en position ouverte." },
              { text: "Lubrifier les axes de pentures si nécessaire." },
            ],
          },
        ],
      },
      {
        id: "coulissant",
        tag: "Volet coulissant",
        title: "Volet coulissant",
        subtitle: "Coulisses sur dormant ou en tableau maçonnerie selon config",
        hero: "/img/occ-coulissant.webp",
        heroKind: "photo",
        tools: {
          outillage: [
            "Perceuse-visseuse + forets bois et béton",
            "Niveau à bulle",
            "Mètre, crayon",
            "Cutter",
            "Lunettes + gants",
          ],
          fournitures: [
            "Coulisses haute et basse (fournies)",
            "Vis sur dormant ou chevilles béton selon config",
            "Butées fin de course",
            "Système de fermeture (loqueteau, crochet)",
          ],
        },
        steps: [
          {
            title: "Vérification avant pose",
            items: [
              { text: "Contrôler la livraison : vantaux, coulisses haute et basse, vis, butées, système de fermeture." },
              { text: "Vérifier les dimensions des vantaux par rapport à la baie." },
              { text: "Identifier la config de fixation : sur dormant ou en tableau maçonnerie." },
              { text: "Vérifier que la fenêtre est définitivement posée avant toute fixation des coulisses." },
            ],
          },
          {
            title: "Pose de la coulisse haute",
            items: [
              {
                text: "Fixation sur dormant :",
                sub: [
                  "Positionner la coulisse haute sur la traverse haute du dormant.",
                  "Vérifier le niveau sur toute la longueur.",
                  "Visser sur le dormant selon les perforations prévues.",
                ],
              },
              {
                text: "Fixation en tableau maçonnerie :",
                sub: [
                  "Positionner la coulisse haute en linteau du tableau.",
                  "Vérifier le niveau sur toute la longueur.",
                  "Marquer les points de perçage, percer, cheviller, visser.",
                ],
              },
            ],
          },
          {
            title: "Pose de la coulisse basse",
            items: [
              { text: "Positionner la coulisse basse en vis-à-vis de la coulisse haute — sur le dormant bas ou sur le seuil selon la config." },
              { text: "Vérifier l'alignement vertical avec la coulisse haute au niveau à bulle ou fil à plomb." },
              { text: "Vérifier le niveau sur toute la longueur." },
              { text: "Fixer selon la même méthode que la coulisse haute (dormant ou tableau)." },
            ],
          },
          {
            title: "Pose des vantaux",
            items: [
              { text: "Engager le vantail dans la coulisse haute en premier — incliner pour introduire les galets dans le rail haut." },
              { text: "Abaisser le bas dans la coulisse basse." },
              { text: "Faire coulisser sur toute la course — vérifier l'absence de frottement." },
              { text: "Répéter pour le second vantail si double vantail." },
            ],
          },
          {
            title: "Réglages et butées",
            items: [
              { text: "Régler la hauteur des galets si les coulisses le permettent." },
              { text: "Poser les butées de fin de course aux deux extrémités." },
              { text: "Vérifier le jeu de recouvrement entre les deux vantaux en position fermée." },
              { text: "Poser le système de fermeture — vérifier l'engagement sans forcer." },
            ],
          },
          {
            title: "Contrôles finaux",
            items: [
              { text: "Tester la coulisse complète dans les deux sens." },
              { text: "Vérifier l'absence de bruit de frottement." },
              { text: "Vérifier la fermeture et le verrouillage." },
              { text: "Lubrifier les rails si nécessaire." },
            ],
          },
        ],
      },
      {
        id: "coulissant-pliant",
        tag: "Coulissant pliant",
        title: "Volet coulissant pliant",
        subtitle: "Pose en tunnel — rail haut en linteau + rail bas sur plots",
        hero: "/img/occ-coulissant-pliant.webp",
        heroKind: "photo",
        tools: {
          outillage: [
            "Perceuse-visseuse + forets béton",
            "Niveau à bulle + niveau laser",
            "Mètre, crayon, équerre",
            "Tournevis plat et cruciforme",
            "Lunettes + gants",
          ],
          fournitures: [
            "Rail haut (fourni)",
            "Rail bas + plots de fixation (fournis)",
            "Pattes de fixation latérales si présence de coulisses",
            "Coulisses latérales si config avec guidage latéral",
            "Chevilles béton adaptées au support",
            "Vis inox",
            "Butées et système de fermeture",
          ],
        },
        steps: [
          {
            title: "Vérification avant pose",
            items: [
              { text: "Contrôler la livraison : vantaux pliants, rail haut, rail bas, plots, pattes latérales, coulisses latérales si prévues, butées, système de fermeture." },
              { text: "Identifier la config de repliage : repli d'un seul côté ou des deux côtés (2 vantaux se rejoignant au centre)." },
              { text: "Vérifier les dimensions des vantaux par rapport à la baie." },
              { text: "Vérifier que la fenêtre est définitivement posée avant toute intervention dans le tunnel." },
            ],
          },
          {
            title: "Pose du rail haut en linteau",
            items: [
              { text: "Projeter une ligne horizontale au niveau laser sur le linteau du tunnel — référence de pose du rail." },
              { text: "Positionner le rail haut en linteau du tunnel — centré sur la largeur de la baie." },
              { text: "Vérifier le niveau sur toute la longueur." },
              { text: "Marquer les points de perçage selon les perforations du rail." },
              { text: "Percer le linteau avec un foret béton adapté." },
              { text: "Mettre en place les chevilles." },
              { text: "Visser le rail — serrage progressif, re-vérifier le niveau après chaque vis." },
            ],
          },
          {
            title: "Pose du rail bas sur plots",
            items: [
              { text: "Positionner les plots sur le seuil du tunnel, en vis-à-vis du rail haut — alignement vertical au niveau laser." },
              { text: "Vérifier l'espacement entre les plots selon les indications fabricant." },
              { text: "Marquer les points de perçage." },
              { text: "Percer et cheviller dans le seuil." },
              { text: "Visser les plots — vérifier leur niveau et leur alignement sur toute la longueur." },
              { text: "Engager le rail bas sur les plots et le fixer." },
            ],
          },
          {
            title: "Fixation latérale (si coulisses présentes)",
            items: [
              { text: "Positionner les coulisses latérales dans le tunnel, de chaque côté de la baie." },
              { text: "Vérifier l'aplomb de chaque coulisse au niveau à bulle." },
              { text: "Fixer les coulisses par pattes dans le tunnel — percer, cheviller, visser." },
              { text: "Vérifier le parallélisme des deux coulisses et leur alignement avec les rails haut et bas." },
            ],
          },
          {
            title: "Pose des vantaux pliants",
            items: [
              {
                text: "Config repli d'un seul côté :",
                sub: [
                  "Engager les galets du premier vantail dans le rail haut depuis le côté de repli.",
                  "Engager le bas dans le rail bas.",
                  "Assembler les vantaux entre eux par les charnières de pliage si non pré-assemblés.",
                  "Faire coulisser et plier l'ensemble sur toute la course — vérifier le libre mouvement.",
                ],
              },
              {
                text: "Config repli des deux côtés :",
                sub: [
                  "Engager le premier demi-jeu de vantaux depuis le côté gauche.",
                  "Engager le second demi-jeu depuis le côté droit.",
                  "Vérifier que les deux demi-jeux se rejoignent proprement au centre en position fermée — alignement et jeu de recouvrement corrects.",
                ],
              },
            ],
          },
          {
            title: "Réglages et butées",
            items: [
              { text: "Régler la hauteur des galets dans le rail haut si le système le permet — les vantaux doivent être de niveau." },
              { text: "Poser les butées de fin de course aux extrémités du rail haut et bas." },
              { text: "Vérifier le pliage : les vantaux doivent se replier sans forcer, sans que les lames ne s'entrechoquent." },
              { text: "Vérifier la position fermée : les vantaux couvrent toute la baie, pas de jour entre les lames." },
              { text: "Poser le système de fermeture (loqueteau, targette, crochet) — vérifier l'engagement sans forcer." },
            ],
          },
          {
            title: "Contrôles finaux",
            items: [
              { text: "Tester ouverture et fermeture complètes plusieurs fois." },
              { text: "Vérifier l'absence de frottement dans les rails." },
              { text: "Vérifier que les vantaux ne sortent pas des rails en position dépliée." },
              { text: "Vérifier la fermeture et le verrouillage." },
              { text: "Lubrifier les rails haut et bas si nécessaire." },
              { text: "Nettoyer les rails de tout résidu de chantier." },
            ],
          },
        ],
      },
      {
        id: "bso",
        tag: "BSO",
        title: "Brise-soleil orientable",
        subtitle: "Consoles fixées en tableau latéral — précâblé en usine",
        hero: "/img/occ-bso.webp",
        heroKind: "photo",
        tools: {
          outillage: [
            "Perceuse-visseuse + forets béton",
            "Niveau à bulle + niveau laser (ligne verticale)",
            "Mètre, crayon, équerre",
            "Clé plate (serrage consoles)",
            "Lunettes + gants",
          ],
          fournitures: [
            "Consoles de fixation (fournies)",
            "Chevilles béton adaptées au support",
            "Vis inox",
          ],
        },
        steps: [
          {
            title: "Vérification avant pose",
            items: [
              { text: "Contrôler la livraison : lames BSO, consoles, câblage moteur, récepteur de commande, notice fabricant." },
              { text: "Vérifier que le câblage est sorti et accessible depuis le tableau latéral ou le linteau." },
              { text: "Identifier le sens de montage des consoles — les consoles ne sont généralement pas symétriques (haut/bas, gauche/droite)." },
              { text: "Vérifier que la fenêtre est posée et étanchée avant toute intervention." },
            ],
          },
          {
            title: "Implantation des consoles",
            items: [
              { text: "Projeter une ligne verticale au niveau laser sur chaque tableau latéral — elle servira de référence pour l'alignement des consoles." },
              { text: "Repérer la position de chaque console selon les cotes du plan fabricant — hauteur et position en tableau." },
              { text: "Vérifier que les consoles gauche et droite sont à la même hauteur — utiliser le niveau laser horizontal pour les aligner." },
              { text: "Marquer les points de perçage au crayon sur le tableau." },
            ],
          },
          {
            title: "Fixation des consoles",
            items: [
              { text: "Percer les trous dans le tableau maçonnerie — foret béton adapté au support." },
              { text: "Mettre en place les chevilles." },
              { text: "Visser les consoles sans serrage définitif dans un premier temps." },
              { text: "Re-vérifier l'alignement au niveau laser avant serrage final." },
              { text: "Serrer définitivement toutes les vis." },
            ],
          },
          {
            title: "Pose du caisson / structure BSO",
            items: [
              { text: "Présenter le caisson ou la structure BSO sur les consoles." },
              { text: "Vérifier le niveau du caisson sur toute sa longueur." },
              { text: "Clipser ou visser le caisson sur les consoles selon le système fabricant." },
              { text: "Vérifier que le caisson ne touche pas le mur et qu'il est bien centré sur la baie." },
            ],
          },
          {
            title: "Pose des lames",
            items: [
              { text: "Engager les lames dans les guides latéraux selon l'ordre et l'orientation prévus par le fabricant." },
              { text: "Vérifier que chaque lame est bien engagée des deux côtés — pas de lame déboîtée." },
              { text: "Vérifier l'alignement des lames entre elles en position fermée — pas de décalage." },
            ],
          },
          {
            title: "Raccordement électrique",
            items: [
              { text: "Le BSO est précâblé en usine — il n'y a pas de câblage interne à réaliser." },
              { text: "Raccorder le câble moteur à l'alimentation électrique — faire intervenir un électricien qualifié." },
              { text: "Brancher le récepteur de commande selon la notice fabricant." },
            ],
          },
          {
            title: "Réglages moteur et lames",
            items: [
              { text: "Mettre sous tension et tester un premier cycle d'orientation des lames." },
              { text: "Régler la fin de course en position fermée (lames à 0°) et en position ouverte (lames à 90°) selon les instructions du fabricant." },
              { text: "Tester toutes les positions intermédiaires — les lames doivent s'orienter de façon homogène sans blocage." },
              { text: "Vérifier l'absence de bruit anormal (frottement, vibration de lames)." },
            ],
          },
          {
            title: "Contrôles finaux",
            items: [
              { text: "Tester plusieurs cycles complets d'orientation." },
              { text: "Vérifier que toutes les lames s'orientent de façon synchrone." },
              { text: "Vérifier l'absence de jeu excessif dans les guides latéraux." },
              { text: "Nettoyer les lames et les guides de tout résidu de chantier." },
              { text: "Remettre les caches ou habillages de consoles si prévus." },
            ],
          },
        ],
      },
    ],
  },

  /* ===================================================== RÉGLAGES ===== */
  reglage: {
    slug: "reglage",
    num: "03",
    kicker: "Notice de réglage",
    title: "Réglages & SAV",
    subtitle: "Fenêtre ouverture à la française et oscillo-battant.",
    lead: "À effectuer après la pose si nécessaire uniquement. Identifier précisément le défaut avant de toucher quoi que ce soit, procéder par étapes, sans forcer, en testant après chaque réglage.",
    selectorLabel: "Réglage",
    globalWarnings: [
      "Réglage à effectuer après la pose si nécessaire uniquement. Ne pas régler systématiquement — intervenir uniquement en cas de défaut constaté.",
      "Ne pas créer de passage d'air en sur-desserrant les fiches. Un réglage trop lâche détériore l'étanchéité à l'air de la menuiserie.",
    ],
    diagnostics: [
      {
        title: "Fiches 2 & 3 brins — diagnostic rapide",
        head: ["Symptôme", "Type de fiche", "Réglage"],
        rows: [
          ["Compression insuffisante ou excessive", "Fiche 2 brins", "Rotation fiche vantail + dormant"],
          ["Compression insuffisante ou excessive", "Fiche 3 brins", "Retrait goupilles + rotation fiche"],
          ["Joint non comprimé uniformément", "Les deux types", "Serrer ou desserrer selon la zone"],
        ],
      },
      {
        title: "Paumelles oscillo-battantes — diagnostic rapide",
        head: ["Symptôme observé", "Réglage", "Amplitude"],
        rows: [
          ["Poignée difficile à actionner", "Compression (galets)", "±0,8 mm"],
          ["Joint non comprimé uniformément", "Compression (galets)", "±0,8 mm"],
          ["Vantail trop haut ou trop bas", "Hauteur (vis de levée)", "−3 / +3 mm"],
          ["Vantail décalé gauche/droite", "Latéral (vis de côté)", "±2 mm"],
          ["Oscillo impossible, frotte haut/bas", "Diagonal (vis compas)", "−2 / +3,5 mm"],
        ],
      },
    ],
    methods: [
      {
        id: "fiche-2",
        group: "Fenêtre · fiches",
        tag: "Fiche 2 brins",
        title: "Fiche 2 brins — compression",
        subtitle: "Réglage de la compression du joint",
        image: "/img/reg-fiches.webp",
        toolsLine: "Tournevis (vantail) + clé à pipe de 8 (dormant)",
        steps: [
          {
            title: "Procédure",
            items: [
              { text: "Ouvrir et dégonder le vantail — décrocher le vantail de ses fiches pour accéder librement aux brins." },
              {
                text: "Serrer ou desserrer les fiches par rotation selon le besoin :",
                sub: [
                  "Sur le vantail : utiliser le tournevis — rotation de la fiche dans le sens souhaité",
                  "Sur le dormant : utiliser la clé à pipe de 8 — rotation de la fiche dans le sens souhaité",
                  "Serrer → augmente la compression du joint à la fermeture",
                  "Desserrer → réduit la compression",
                ],
              },
              { text: "Reposer le vantail sur ses fiches et tester la fermeture — vérifier la compression du joint et l'effort de poignée." },
              { text: "Répéter si nécessaire jusqu'à obtenir une compression homogène sur tout le périmètre." },
            ],
            warnings: [
              "Agir de façon progressive — un demi-tour à la fois. Tester après chaque ajustement avant de continuer.",
              "Ne pas desserrer excessivement : un jeu trop important entre les brins crée un passage d'air et détériore l'étanchéité.",
            ],
          },
        ],
      },
      {
        id: "fiche-3",
        group: "Fenêtre · fiches",
        tag: "Fiche 3 brins",
        title: "Fiche 3 brins — compression",
        subtitle: "Même principe que la 2 brins, avec retrait préalable des goupilles",
        image: "/img/reg-fiches.webp",
        toolsLine: "Tournevis",
        intro: "La fiche 3 brins fonctionne sur le même principe que la fiche 2 brins, avec une étape préalable de retrait des goupilles de blocage.",
        steps: [
          {
            title: "Procédure",
            items: [
              { text: "Enlever les goupilles — retirer les goupilles de blocage situées sur la fiche avant tout réglage. Ces goupilles maintiennent les brins en position fixe." },
              { text: "Dégonder le vantail — décrocher le vantail de ses fiches." },
              {
                text: "Serrer ou desserrer les fiches par rotation selon le besoin :",
                sub: [
                  "Sur le vantail : rotation de la fiche au tournevis",
                  "Sur le dormant : rotation de la fiche au tournevis",
                  "Serrer → augmente la compression",
                  "Desserrer → réduit la compression",
                ],
              },
              { text: "Reposer le vantail, tester et ajuster si nécessaire." },
            ],
            warnings: [
              "Ne pas oublier de remettre les goupilles après réglage — sans elles, les brins peuvent se dérégler progressivement à l'usage.",
              "Ne pas créer de passage d'air en desserrant trop.",
            ],
          },
        ],
      },
      {
        id: "paumelle-compression",
        group: "Oscillo-battant · paumelles",
        tag: "Compression",
        title: "Réglage 1 — Compression",
        subtitle: "Augmenter ou réduire la compression du joint",
        amplitude: "±0,8 mm",
        image: "/img/reglage_image3.png",
        problem: "Poignée difficile à actionner, ou joint non comprimé uniformément — l'ouvrant n'assure pas une étanchéité parfaite avec le dormant.",
        objective: "Poignée qui tourne avec un effort régulier, joint comprimé sur tout le périmètre — sans zone dure ni zone molle.",
        toolsLine: "Clé 6 pans n°4 (BTR)",
        steps: [
          {
            title: "Procédure",
            items: [
              { text: "Ouvrir le vantail pour accéder aux galets à tête de champignon sur les tringles de la crémone." },
              { text: "Localiser les galets concernés — identifier visuellement où la compression est insuffisante ou excessive en testant la fermeture." },
              {
                text: "Tourner le galet à la clé 6 pans n°4 :",
                sub: [
                  "Sens horaire → avance le galet → augmente la compression en ce point",
                  "Sens anti-horaire → recule le galet → réduit la compression",
                ],
              },
              { text: "Fermer le vantail et tester : rotation de la poignée, compression du joint sur tout le périmètre." },
              { text: "Répéter galet par galet jusqu'à obtenir une compression uniforme et une poignée fluide." },
            ],
            warnings: ["Amplitude maximale : ±0,8 mm par galet. Au-delà, ce n'est plus un problème de galet mais d'alignement du vantail — passer au réglage hauteur ou latéral."],
          },
        ],
      },
      {
        id: "paumelle-hauteur",
        group: "Oscillo-battant · paumelles",
        tag: "Hauteur",
        title: "Réglage 2 — Hauteur",
        subtitle: "Soulever ou abaisser le vantail",
        amplitude: "−3 / +3 mm",
        image: "/img/reglage_image4.png",
        problem: "Le vantail se situe trop haut ou trop bas par rapport au dormant — jeu inégal en haut et en bas, vantail qui frotte en bas ou jeu excessif.",
        toolsLine: "Clé 6 pans n°4 (BTR)",
        steps: [
          {
            title: "Procédure",
            items: [
              { text: "Tourner la poignée à l'horizontale (90°) — position battant obligatoire pour ne pas endommager le mécanisme." },
              { text: "Retirer le cache de protection sur la paumelle concernée avec un tournevis plat — il s'enclipse généralement par simple pression." },
              { text: "Localiser la vis de levée — vis BTR accessible une fois le cache retiré." },
              {
                text: "Tourner à la clé 6 pans n°4 :",
                sub: [
                  "Sens horaire → soulève le vantail",
                  "Sens anti-horaire → abaisse le vantail",
                ],
              },
              { text: "Agir sur toutes les paumelles dans le même sens et de la même valeur — ne jamais régler une seule paumelle sur plusieurs, le vantail se vrille." },
              { text: "Remettre les caches et tester la fermeture." },
            ],
            warnings: ["Ne jamais effectuer ce réglage poignée en position 0° (fermé) ou 180° (oscillo) — risque de casse du mécanisme."],
          },
        ],
      },
      {
        id: "paumelle-lateral",
        group: "Oscillo-battant · paumelles",
        tag: "Latéral",
        title: "Réglage 3 — Latéral",
        subtitle: "Déplacer le vantail gauche / droite",
        amplitude: "±2 mm",
        image: "/img/reglage_image1.png",
        problem: "Le vantail est décalé latéralement — jeu inégal côté charnière et côté fermeture, vantail qui frotte d'un côté.",
        toolsLine: "Clé 6 pans n°4 (BTR)",
        steps: [
          {
            title: "Procédure",
            items: [
              { text: "Tourner la poignée à l'horizontale (90°) — position battant obligatoire." },
              { text: "Retirer le cache de protection sur la paumelle pour accéder à la vis de réglage latéral sur le côté." },
              {
                text: "Tourner à la clé 6 pans n°4 :",
                sub: [
                  "Sens horaire → déplace le vantail vers la droite",
                  "Sens anti-horaire → déplace le vantail vers la gauche",
                ],
              },
              { text: "Agir sur toutes les paumelles simultanément, dans le même sens et de la même valeur — régler une seule paumelle vrille le vantail." },
              { text: "Remettre les caches et tester." },
            ],
            warnings: ["Toujours intervenir sur toutes les paumelles en même temps pour le réglage latéral. Un réglage partiel déforme le vantail et crée de nouveaux défauts."],
          },
        ],
      },
      {
        id: "paumelle-diagonal",
        group: "Oscillo-battant · paumelles",
        tag: "Diagonal",
        title: "Réglage 4 — Diagonal",
        subtitle: "Oscillo qui frotte — réglage du compas",
        amplitude: "−2 / +3,5 mm",
        image: "/img/reglage_image2.png",
        problem: "La fonction oscillo-battante n'est plus possible car le vantail frotte en haut ou en bas lors du basculement.",
        intro: "Ce réglage agit sur le compas — le bras articulé en haut du vantail côté charnière qui permet le basculement.",
        toolsLine: "Clé 6 pans n°4 (BTR)",
        steps: [
          {
            title: "Procédure",
            items: [
              { text: "Ouvrir le vantail à 90° (position battant française complète) pour accéder à la vis de réglage située à l'arrière du compas." },
              { text: "Localiser la vis de réglage du compas — vis BTR accessible par l'arrière une fois le vantail ouvert à 90°." },
              {
                text: "Tourner à la clé 6 pans n°4 :",
                sub: [
                  "Sens horaire → soulève le vantail en position oscillo",
                  "Sens anti-horaire → abaisse le vantail en position oscillo",
                ],
              },
              { text: "Tester en passant en mode oscillo (poignée à 180°) — vérifier que le vantail bascule librement sans frotter ni en haut ni en bas." },
              { text: "Repasser en mode battant (poignée à 90°), refermer (poignée à 0°) et re-tester." },
            ],
            warnings: ["Ce réglage ne s'effectue pas paumelle par paumelle — il agit uniquement sur le compas (bras de rappel haut). Ne pas confondre avec le réglage de hauteur."],
          },
        ],
      },
    ],
    sequence: {
      title: "Séquence correcte d'utilisation — rappel",
      note: "À chaque anomalie, vérifier d'abord la séquence d'utilisation avant tout réglage.",
      head: ["Position poignée", "Action", "Résultat"],
      rows: [
        ["0° (vers le bas)", "Verrouiller", "Vantail fermé et verrouillé"],
        ["90° (horizontal)", "Ouvrir", "Vantail s'ouvre en battant français"],
        ["180° (vers le haut)", "Basculer", "Vantail passe en oscillo"],
        ["Depuis oscillo → fermer", "Remettre à plat PUIS poignée à 0°", "Ne jamais forcer"],
        ["Depuis battant → fermer", "Refermer le vantail PUIS poignée à 0°", "Ne jamais forcer"],
      ],
      warning: "Ne jamais forcer la poignée en position intermédiaire. Si la poignée résiste : remettre d'abord le vantail en appui contre le dormant, puis tourner. Un forçage casse le mécanisme et bloque définitivement le vantail.",
    },
    escalation: {
      title: "Si les réglages ne suffisent pas",
      intro: "Si après tous les réglages dans les amplitudes indiquées le défaut persiste :",
      items: [
        "Vérifier les tolérances de pose : horizontalité (±1 mm/m) et aplomb (±1 mm/m) du dormant — un dormant mal posé génère des défauts impossibles à corriger par les paumelles seules.",
        "Vérifier l'absence de déformation du vantail : poser une règle à plat sur le vantail — s'il est vrillé, les réglages ne pourront pas compenser.",
        "Vérifier l'usure du joint périmétrique : un joint écrasé ou décollé ne se compensera pas avec les galets.",
        "Contacter le responsable technique — une pose incorrecte ou une dégradation du profilé nécessite une intervention au-delà du réglage.",
      ],
    },
  },
};

export const docOrder = ["pose", "occultation", "reglage"] as const;
