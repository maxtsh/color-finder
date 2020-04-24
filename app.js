// All Values
const body = document.querySelector('body');
const container = document.querySelector('.container');

// Events
body.addEventListener('mouseover' , getColor);

// Functions
function getColor(e){
    const target = e.target;
    const output = document.querySelector('.output');

    // Getting Color In rgba Form*****
    let color = window.getComputedStyle( target , null).getPropertyValue('background-color');

    // RGB To HEX Function*****
    function RGBToHex(rgb) {
        // Choose correct separator
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        // Turn "rgb(r,g,b)" into [r,g,b]
        rgb = rgb.substr(4).split(")")[0].split(sep);
      
        let r = (+rgb[0]).toString(16),
            g = (+rgb[1]).toString(16),
            b = (+rgb[2]).toString(16);
      
        if (r.length == 1)
          r = "0" + r;
        if (g.length == 1)
          g = "0" + g;
        if (b.length == 1)
          b = "0" + b;
      
        return "#" + r + g + b;
    }

    // function RGBAToHexA(rgba) {
    //     let sep = rgba.indexOf(",") > -1 ? "," : " ";
    //     rgba = rgba.substr(5).split(")")[0].split(sep);
                      
    //     // Strip the slash if using space-separated syntax
    //     if (rgba.indexOf("/") > -1)
    //       rgba.splice(3,1);
      
    //     for (let R in rgba) {
    //       let r = rgba[R];
    //       if (r.indexOf("%") > -1) {
    //         let p = r.substr(0,r.length - 1) / 100;
      
    //         if (R < 3) {
    //           rgba[R] = Math.round(p * 255);
    //         } else {
    //           rgba[R] = p;
    //         }
    //       }
    //     }

    //     let r = (+rgba[0]).toString(16),
    //     g = (+rgba[1]).toString(16),
    //     b = (+rgba[2]).toString(16),
    //     a = Math.round(+rgba[3] * 255).toString(16);
  
    //     if (r.length == 1)
    //     r = "0" + r;
    //     if (g.length == 1)
    //     g = "0" + g;
    //     if (b.length == 1)
    //     b = "0" + b;
    //     if (a.length == 1)
    //     a = "0" + a;
  
    // return "#" + r + g + b + a;
    // }


    // Converting*****
        // If RGB
    color = RGBToHex(color);

        // If RGBA
    //color = RGBAToHexA(color);

    if(color === ''){
        output.innerHTML = 'No Color';
    }else{
    console.log(color);
    output.innerHTML = `Color Is: ${color}`;
    }
}



