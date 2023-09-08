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
                <path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" stroke="var(--black-color)" fill="transparent" />
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

    </svg>
`

document.body.insertAdjacentHTML('afterbegin', sprite);