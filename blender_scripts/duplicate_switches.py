import bpy

# KiCad switch positions (right PCB) - extracted from allium58.kicad_pcb
# Format: (x_mm, y_mm, rotation_deg)
kicad_positions = [
    (158.60, 46.21, 0.0),
    (139.50, 47.60, 0.0),
    (177.60, 47.60, 0.0),
    (120.50, 50.00, 0.0),
    (196.70, 52.40, 0.0),
    (215.70, 53.90, 0.0),
    (158.60, 65.30, 0.0),
    (139.50, 66.70, 0.0),
    (177.60, 66.60, 0.0),
    (120.50, 69.10, 0.0),
    (196.70, 71.30, 0.0),
    (215.70, 72.80, 0.0),
    (158.60, 84.40, 0.0),
    (139.50, 85.70, 0.0),
    (177.60, 85.70, 0.0),
    (120.50, 88.10, 0.0),
    (196.70, 90.50, 0.0),
    (215.70, 92.00, 0.0),
    (101.40, 97.50, 0.0),
    (158.60, 103.40, 0.0),
    (139.50, 104.80, 0.0),
    (177.60, 104.80, 0.0),
    (120.50, 107.10, 0.0),
    (196.70, 109.50, 0.0),
    (215.75, 111.00, 0.0),
    (149.00, 123.75, 0.0),
    (168.10, 123.75, 0.0),
    (130.00, 126.00, 0.0),
    (105.00, 127.00, -60.0),
]

# Get reference position (first switch)
ref_x, ref_y, ref_rot = kicad_positions[0]

# Get the currently selected switch object
switch_obj = bpy.context.active_object

if not switch_obj:
    print("ERROR: No object selected. Select a switch first.")
else:
    print(f"Duplicating switch: {switch_obj.name}")
    
    # Get reference switch's current position in Blender
    ref_pos_blender = switch_obj.location.copy()
    
    # Scale factor: KiCad is in mm, need to find proper scale
    # You may need to adjust this based on your import scale
    scale = 0.001
    
    # Duplicate switches at each position
    for i, (x_mm, y_mm, rot_deg) in enumerate(kicad_positions[1:], start=1):
        # Calculate offset from reference position
        dx_mm = x_mm - ref_x
        dy_mm = y_mm - ref_y
        d_rot = rot_deg - ref_rot
        
        # Convert to Blender coordinates
        # KiCad Y is inverted compared to Blender
        dx_blender = dx_mm * scale
        dy_blender = -dy_mm * scale
        
        # Duplicate the switch
        new_switch = switch_obj.copy()
        new_switch.data = switch_obj.data.copy()
        new_switch.name = f"Switch_{i:02d}"
        
        # Set new position
        new_switch.location.x = ref_pos_blender.x + dx_blender
        new_switch.location.y = ref_pos_blender.y + dy_blender
        new_switch.location.z = ref_pos_blender.z
        
        # Apply rotation (convert degrees to radians)
        new_switch.rotation_euler[2] += (d_rot * 3.14159 / 180.0)
        
        # Link to current collection
        bpy.context.collection.objects.link(new_switch)
        
        print(f"Created {new_switch.name} at ({x_mm}, {y_mm}, {rot_deg})")
    
    print(f"Created {len(kicad_positions) - 1} switches")