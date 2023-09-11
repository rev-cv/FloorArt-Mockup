const sprite = `
<svg style="display:none">
        <symbol id="ico-basket" viewBox="0 0 24 24">
            <g>
                <path d="M3.5 4.5H5.05848C5.7542 4.5 6.10206 4.5 6.36395 4.68876C6.62584 4.87752 6.73584 5.20753 6.95585 5.86754L7.5 7.5" stroke="var(--black-color)" stroke-linecap="round" fill="transparent" />
                <path d="M17.5 17.5H8.05091C7.90471 17.5 7.83162 17.5 7.77616 17.4938C7.18857 17.428 6.78605 16.8695 6.90945 16.2913C6.92109 16.2367 6.94421 16.1674 6.99044 16.0287V16.0287C7.04177 15.8747 7.06743 15.7977 7.09579 15.7298C7.38607 15.0342 8.04277 14.5608 8.79448 14.5054C8.8679 14.5 8.94906 14.5 9.11137 14.5H14.5" stroke="var(--black-color)" stroke-linecap="round" stroke-linejoin="round" fill="transparent" />
                <path d="M14.1787 14.5H11.1376C9.85836 14.5 9.21875 14.5 8.71781 14.1697C8.21687 13.8394 7.96492 13.2515 7.461 12.0757L7.29218 11.6818C6.48269 9.79294 6.07794 8.84853 6.52255 8.17426C6.96715 7.5 7.99464 7.5 10.0496 7.5H15.3305C17.6295 7.5 18.779 7.5 19.2126 8.24711C19.6462 8.99422 19.0758 9.99229 17.9352 11.9884L17.6517 12.4846C17.0897 13.4679 16.8088 13.9596 16.3432 14.2298C15.8776 14.5 15.3113 14.5 14.1787 14.5Z" stroke="var(--black-color)" stroke-linecap="round"  fill="transparent" />
                <circle cx="17" cy="20" r="1" fill="var(--black-color)" />
                <circle cx="9" cy="20" r="1" fill="var(--black-color)" />
            </g>
        </symbol>

        <symbol id="ico-favorite" viewBox="0 0 24 24">
            <g>
                <path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"  /> <!-- stroke="var(--black-color)" fill="transparent" -->
            </g>
        </symbol>

        <symbol id="ico-menu" viewBox="0 0 24 24">
            <g>
                <path d="M4 6H20M4 12H20M4 18H20" stroke="var(--black-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </symbol>

        <symbol id="ico-search" viewBox="0 0 24 24">
            <g>
                <circle cx="11" cy="11" r="6" stroke="var(--black-color)" fill="transparent" />
                <path d="M20 20L17 17" stroke="var(--black-color)" stroke-linecap="round"/>
            </g>
        </symbol>

        <symbol id="ico-arrow" viewBox="0 0 24 24">
            <g>
                <path d="M4 12L3.64645 11.6464L3.29289 12L3.64645 12.3536L4 12ZM19 12.5C19.2761 12.5 19.5 12.2761 19.5 12C19.5 11.7239 19.2761 11.5 19 11.5V12.5ZM9.64645 5.64645L3.64645 11.6464L4.35355 12.3536L10.3536 6.35355L9.64645 5.64645ZM3.64645 12.3536L9.64645 18.3536L10.3536 17.6464L4.35355 11.6464L3.64645 12.3536ZM4 12.5H19V11.5H4V12.5Z" fill="var(--black-color)"/>
            </g>
        </symbol>

        <symbol id="ico-angular-arrow" viewBox="0 0 24 24">
            <g><path d="M18 9L12 15L6 9" stroke="var(--black-color)" fill="transparent"/></g>
        </symbol>


        <symbol id="ico-success" viewBox="0 0 24 24">
            <g>
                <path d="M8.00009 13L12.2278 16.3821C12.6557 16.7245 13.2794 16.6586 13.6264 16.2345L22.0001 6" stroke="var(--blue-color)" stroke-linecap="round" fill="transparent"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8051 11.9167L15.387 6.31663C15.5618 6.10291 15.5303 5.7879 15.3166 5.61304C15.1029 5.43817 14.7879 5.46967 14.613 5.6834L10.0369 11.2765L10.8051 11.9167ZM7.63879 15.7866L6.87054 15.1464L6.22007 15.9415C6.0504 16.1488 5.74743 16.1856 5.53309 16.0248L2.3 13.6C2.07909 13.4343 1.76568 13.4791 1.6 13.7C1.43431 13.9209 1.47909 14.2343 1.7 14.4L4.93309 16.8248C5.57613 17.3071 6.48503 17.1968 6.99402 16.5747L7.63879 15.7866Z" fill="var(--blue-color)"/>
            </g>
        </symbol>

        <symbol id="ico-setting" viewBox="0 0 683 701">
            <g>
                <path d="M595.383 383.667C596.835 372.614 597.614 361.482 597.717 350.334C597.614 339.186 596.835 328.054 595.383 317.001L667.55 260.501C670.809 258.012 673.036 254.408 673.804 250.38C674.573 246.352 673.83 242.182 671.717 238.667L603.383 120.167C601.404 116.613 598.193 113.905 594.356 112.555C590.518 111.204 586.319 111.303 582.55 112.834L497.383 147.167C479.661 133.642 460.282 122.44 439.717 113.834L426.883 23.3341C426.317 19.3295 424.314 15.6674 421.248 13.0302C418.182 10.3931 414.261 8.961 410.217 9.00081H273.217C269.172 8.961 265.252 10.3931 262.185 13.0302C259.119 15.6674 257.116 19.3295 256.55 23.3341L243.717 113.834C223.125 122.387 203.738 133.592 186.05 147.167L100.55 112.834C96.7807 111.303 92.5816 111.204 88.7442 112.555C84.9067 113.905 81.6958 116.613 79.7166 120.167L11.3833 238.667C9.27009 242.182 8.52677 246.352 9.29549 250.38C10.0642 254.408 12.291 258.012 15.5499 260.501L87.5499 317.001C86.1037 328.055 85.3245 339.186 85.2166 350.334C85.3188 361.482 86.098 372.614 87.5499 383.667L15.5499 440.167C12.291 442.657 10.0642 446.26 9.29549 450.288C8.52677 454.316 9.27009 458.486 11.3833 462.001L79.7166 580.501C81.6958 584.055 84.9067 586.763 88.7442 588.114C92.5816 589.465 96.7807 589.365 100.55 587.834L185.717 553.501C203.438 567.026 222.818 578.228 243.383 586.834L256.217 677.334C256.783 681.339 258.785 685.001 261.852 687.638C264.918 690.275 268.839 691.707 272.883 691.667H409.55C413.594 691.707 417.515 690.275 420.581 687.638C423.648 685.001 425.651 681.339 426.217 677.334L439.05 586.834C459.642 578.282 479.028 567.076 496.717 553.501L581.883 587.834C585.652 589.365 589.852 589.465 593.689 588.114C597.526 586.763 600.737 584.055 602.717 580.501L671.05 462.001C673.163 458.486 673.906 454.316 673.138 450.288C672.369 446.26 670.142 442.657 666.883 440.167L595.383 383.667ZM341.55 470.001C317.875 470.034 294.722 463.043 275.021 449.914C255.32 436.785 239.956 418.107 230.874 396.244C221.791 374.381 219.397 350.315 223.996 327.091C228.594 303.867 239.978 282.528 256.707 265.776C273.436 249.024 294.758 237.61 317.976 232.979C341.194 228.348 365.263 230.708 387.139 239.761C409.015 248.813 427.714 264.151 440.871 283.834C454.027 303.516 461.05 326.659 461.05 350.334C461.072 366.041 457.997 381.598 452.001 396.116C446.006 410.634 437.207 423.827 426.108 434.941C415.009 446.055 401.828 454.873 387.319 460.888C372.81 466.904 357.257 470.001 341.55 470.001Z" stroke="var(--black-color)" stroke-width="16.6667" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
            </g>
        </symbol>

        <symbol id="ico-catalog" viewBox="0 0 608 634">
            <g>
                <path d="M9 625.667H577.333" stroke="var(--black-color)" stroke-width="16.6667" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
                <path d="M10.6665 592.333L127.333 589L119 10.6667L13.9998 9L10.6665 592.333Z" stroke="var(--black-color)" stroke-width="16.6667" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
                <path d="M154 142.333L149 580.667L257.333 577.333L270.667 145.667L154 142.333Z" stroke="var(--black-color)" stroke-width="16.6667" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
                <path d="M304 49L280.667 585.667L425.667 584L454 57.3333L304 49Z" stroke="var(--black-color)" stroke-width="16.6667" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
                <path d="M470.667 154L445.667 592.333L575.667 594L599 155.667L470.667 154Z" stroke="var(--black-color)" stroke-width="16.6667" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
                <path d="M487.333 154C498.083 137.747 512.066 123.882 528.411 113.273C544.756 102.663 563.112 95.5348 582.333 92.3334" stroke="var(--black-color)" stroke-width="16.6667" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
                <path d="M119 10.6667L150.667 67.3334L152.333 144" stroke="var(--black-color)" stroke-width="16.6667" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
                <path d="M127.333 589L149 580.667" stroke="var(--black-color)" stroke-width="16.6667" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
            </g>
        </symbol>

        <symbol id="ico-cooperation" viewBox="0 0 738 800">
            <g>
                <path d="M600.25 575V762.5C600.25 776.25 589 787.5 575.25 787.5H37.75C24 787.5 12.75 776.25 12.75 762.5V37.5C12.75 23.75 24 12.5 37.75 12.5H361.5L600.25 238.75V425" stroke="var(--black-color)" stroke-width="25" fill="transparent"/>
                <path d="M600.25 248.75H387.75C374 248.75 362.75 237.5 362.75 223.75V25" stroke="var(--black-color)" stroke-width="25" fill="transparent"/>
                <path d="M125.25 225H287.75" stroke="var(--black-color)" stroke-width="25"/>
                <path d="M125.25 350H512.75" stroke="var(--black-color)" stroke-width="25"/>
                <path d="M125.25 437.5H512.75" stroke="var(--black-color)" stroke-width="25"/>
                <path d="M125.25 550H425.25" stroke="var(--black-color)" stroke-width="25"/>
                <path d="M125.25 625H337.75" stroke="var(--black-color)" stroke-width="25"/>
                <path d="M350.25 750L399 632.5L652.75 378.75C657.75 373.75 666.5 373.75 672.75 378.75L721.5 427.5C726.5 432.5 726.5 441.25 721.5 447.5L467.75 701.25L350.25 750Z" stroke="var(--black-color)" stroke-width="25" stroke-linejoin="round" fill="transparent"/>
                <path d="M624 408.75L691.5 476.25" stroke="var(--black-color)" stroke-width="25"/>
            </g>
        </symbol>


        <symbol id="ico-tag" viewBox="0 0 634 632">
            <g>
                <path d="M363.48 9L9 363.412L268.418 622.823L625.667 265.587V9.00167L363.48 9Z" stroke="var(--black-color)" stroke-width="16.6667" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
                <path d="M298.887 429.522L241.21 487.2L322.629 568.617L380.306 510.939L298.887 429.522Z" stroke="var(--black-color)" stroke-width="16.6667" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
                <path d="M354.43 296.253L296.753 353.931L417.034 474.21L474.711 416.532L354.43 296.253Z" stroke="var(--black-color)" stroke-width="16.6667" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
                <path d="M394.334 147.342L336.656 205.02L511.441 379.801L569.118 322.123L394.334 147.342Z" stroke="var(--black-color)" stroke-width="16.6667" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
                <path d="M542.312 116.168C542.695 87.4617 519.734 63.8805 491.028 63.4978C462.322 63.115 438.741 86.0757 438.358 114.782C437.975 143.488 460.936 167.069 489.642 167.452C518.348 167.835 541.929 144.874 542.312 116.168Z" stroke="var(--black-color)" stroke-width="16.6667" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>
            </g>
        </symbol>

        <symbol id="ico-close" viewBox="0 0 24 24">
            <g>
                <path d="M18 6L6 18" stroke="var(--black-color)" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 6L18 18" stroke="var(--black-color)" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </symbol>

        <symbol id="ico-del" viewBox="0 0 24 24">
            <g>
                <path d="M17,4V5H15V4H9V5H7V4A2,2,0,0,1,9,2h6A2,2,0,0,1,17,4Z" fill="var(--black-color)"></path>
                <path d="M20,6H4A1,1,0,0,0,4,8H5V20a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V8h1a1,1,0,0,0,0-2Z" fill="var(--black-color)"></path>
            </g>
        </symbol>

        

    </svg>
`

document.body.insertAdjacentHTML('afterbegin', sprite);