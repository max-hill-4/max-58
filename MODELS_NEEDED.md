# 3D Models Needed for Exploded View

The KiCad PCB references these 3D models. Download them and put in `/public/models/`:

## Already Available (KiCad Library)
- `JST_PH_S2B-PH-K_1x02_P2.00mm_Horizontal.wrl` - Battery connector
- `D_SOD-123.step` - Diode

## Need to Download

### Switches & Keycaps
- **Gateron Low Profile Switch**: https://grabcad.com/library/gateron-low-profile-switch-1
- **Choc/Keycap**: https://grabcad.com/library/kailh-choc-switch-1 (use for GLP too, similar size)

### MCU
- **nice!nano v2** or **Pro Micro**: https://grabcad.com/library/nice-nano-v2-1
  - Or: https://grabcad.com/library/arduino-pro-mini-2

### OLED
- **0.91" OLED Module**: https://grabcad.com/library/oled-display-0-91-128x32-1

### TRRS Jack
- **PJ-320A TRRS**: https://grabcad.com/library/trrs-jack-pj-320a-1

### Case
- **Printable case for Allium58**: https://www.printables.com/model/657755-low-profile-case-for-allium58-glp

## How to Export PCB from KiCad

1. Open `allium58.kicad_pcb` in KiCad
2. File → Export → STEP
3. Save as `pcb.step`
4. Put in `/public/models/`

## File Format Support
- `.glb` / `.gltf` - Best for web (smaller)
- `.stl` - Works but no colors
- `.obj` - Works with materials
- `.step` / `.stp` - Need conversion to glTF