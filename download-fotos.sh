#!/usr/bin/env bash
# Haalt de foto's en het logo eenmalig op van de huidige (Lovable-)site
# en zet ze met nette namen in de map assets/.
# Gebruik: open een terminal in deze map en typ:  bash download-fotos.sh
set -e
mkdir -p assets
BASE="https://unbeatable-pt.nl/assets"
while read -r bron doel; do
  echo "→ $doel"
  curl -fsSL "$BASE/$bron" -o "assets/$doel"
done <<'LIJST'
logo-new-DMuH3m3O.png logo.png
anke-squat-CRJBSS9t.jpg anke-squat.jpg
anke-begeleiding-CO5gAdmS.jpg anke-begeleiding.jpg
anke-training-duo-vwJP3h61.jpg anke-training-duo.jpg
duo-training-CQoN6K4p.jpg duo-training.jpg
fun-training-CLqVRS4j.jpg fun-training.jpg
instagram-motivatie-DDpFEdUp.jpg instagram-motivatie.jpg
anke-champagne-Cook6A58.jpg anke-champagne.jpg
LIJST
echo "Klaar! Alle foto's staan in assets/"
