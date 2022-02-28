if (Attr.val == 0x0002) { Item.val = 7000; R.item('state/gesture').val = 0; }      // wakeup
else if (Attr.val == 0x0000) { Item.val = 7007; R.item('state/gesture').val = 1; } // shake
else if (Attr.val == 0x0003) { Item.val = 7008; R.item('state/gesture').val = 2; } // drop
else {
    var sideMap = [1, 3, 5, 6, 4, 2];
    var side = sideMap[Attr.val & 0x0007];
    var previousSide = sideMap[(Attr.val & 0x0038) >> 3];

    if (Attr.val & 0x0040)  { Item.val = side * 1000 + previousSide; R.item('state/gesture').val = 3; }  // flip 90°
    else if (Attr.val & 0x0080)  { Item.val = side * 1000 + 7 - side; R.item('state/gesture').val = 4; } // flip 180°
    else if (Attr.val & 0x0100)  { Item.val = side * 1000; R.item('state/gesture').val = 5; }            // push
    else if (Attr.val & 0x0200)  { Item.val = side * 1000 + side; R.item('state/gesture').val = 6; }     // double tap
}