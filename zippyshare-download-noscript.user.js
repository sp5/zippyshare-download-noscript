// ==UserScript==
// @name        ZippyShare Noscript Download
// @namespace   samuelphillips.net
// @description Download files from ZippyShare without enabling scripts
// @include     http*://*.zippyshare.com/v/*/file.html
// @version     1
// @grant       none
// @run-at      document-end
// ==/UserScript==

/*
 * COPYRIGHT 2017 Samuel Phillips
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*

    if (document.getElementById('fimage')) {
        document.getElementById('fimage').href = "/i/0EwNJF4b/"+(Math.pow(a, 3)+b)+"/The%20Adventures%20of%20Tintin%20-%20Cigars%20of%20the%20Pharaoh%20%281934%29%20%282048px%29%20%28Minutemen-Syl3ntBob%29.cbz";
    }


*/

(function() {
    var dlbutton = document.getElementById('dlbutton');
    var script = dlbutton.parentElement.querySelector('script');
    var m1 = /^\s*var\s+a\s*=\s*(\d+)\s*;/.exec(script.innerText);
    var m2 = /document\.getElementById\('dlbutton'\)\.href\s*=\s*"([^"]*)"\+\(Math\.pow\(a,\s*(\d+)\)\+b\)\+"([^"]*)"/.exec(script.innerText);
    if (!m1 || !m2) {
        console.log("Could not extract URL");
        return;
    }
    var a = parseInt(m1[1]);
    var t1 = m2[1];
    var apow = parseInt(m2[2]);
    var t2 = m2[3];
    location.href = t1 + String(Math.pow(a, apow) + 3) + t2;
})();
