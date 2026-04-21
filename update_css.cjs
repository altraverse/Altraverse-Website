const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

css = css.replace(/html \{\s*scroll-behavior: smooth;\s*background: #050505;/g, 'html {\n  scroll-behavior: smooth;\n  background: transparent;');

css = css.replace(/body \{\s*min-height: 100vh;\s*margin: 0;\s*font-family: [^\n]+;\s*background-color: #050505;\s*background:[^;]+;/g, 'body {\n  min-height: 100vh;\n  margin: 0;\n  font-family: "Manrope", sans-serif;\n  background: transparent;');

css = css.replace(/#about \{\s*background: #050505;\s*\}/g, '#about {\n  background: transparent;\n}');

css = css.replace(/#about \.premium-card,\s*#about \.mini-card,\s*#about \.metric-box \{\s*background: linear-gradient\(180deg, rgba\(10, 10, 12, 0\.96\), rgba\(4, 4, 5, 0\.98\)\);\s*\}/g, '#about .premium-card,\n#about .mini-card,\n#about .metric-box {\n  background: linear-gradient(180deg, rgba(10, 10, 12, 0.6), rgba(4, 4, 5, 0.6));\n  backdrop-filter: blur(12px);\n}');

css = css.replace(/\.hero-section \{\s*min-height: 92vh;\s*display: flex;\s*align-items: center;\s*padding-top: 154px;\s*background: #050505;\s*\}/g, '.hero-section {\n  min-height: 92vh;\n  display: flex;\n  align-items: center;\n  padding-top: 154px;\n  background: transparent;\n}');

css = css.replace(/\.showcase-frame,\s*\.premium-card,\s*\.launch-strip \{\s*position: relative;\s*background: linear-gradient\(180deg, rgba\(19, 19, 24, 0\.9\), rgba\(8, 8, 10, 0\.88\)\);/g, '.showcase-frame,\n.premium-card,\n.launch-strip {\n  position: relative;\n  background: linear-gradient(180deg, rgba(19, 19, 24, 0.5), rgba(8, 8, 10, 0.6));\n  backdrop-filter: blur(16px);');

css = css.replace(/\.hero-startup-card \{\s*position: relative;\s*min-height: 100%;\s*padding: 18px 18px;\s*border-radius: 24px;\s*background: linear-gradient\(180deg, rgba\(9, 9, 10, 0\.96\), rgba\(4, 4, 5, 0\.98\)\);/g, '.hero-startup-card {\n  position: relative;\n  min-height: 100%;\n  padding: 18px 18px;\n  border-radius: 24px;\n  background: linear-gradient(180deg, rgba(9, 9, 10, 0.6), rgba(4, 4, 5, 0.6));\n  backdrop-filter: blur(16px);');

fs.writeFileSync('styles.css', css);
console.log('CSS updated successfully');
