import { css } from '@bake-js/-o-id/dom'


function style () {
  return css`


.photo-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  grid-gap: 10px;
  max-width: 900px;
  margin: 0 auto;
  padding: var(--spacing_inset-xs);
}

.photo-gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.photo-gallery img:nth-child(1) { grid-column: span 1; grid-row: span 1; }
.photo-gallery img:nth-child(2) { grid-column: span 1; grid-row: span 2; }
.photo-gallery img:nth-child(3) { grid-column: span 1; grid-row: span 1; }
.photo-gallery img:nth-child(4) { grid-column: span 1; grid-row: span 1; }
.photo-gallery img:nth-child(5) { grid-column: span 1; grid-row: span 1; }
.photo-gallery img:nth-child(7) { grid-column: span 1; grid-row: span 2; }
.photo-gallery img:nth-child(8) { grid-column: span 1; grid-row: span 1; }
.photo-gallery img:nth-child(9) { grid-column: span 1; grid-row: span 2; }
.photo-gallery img:nth-child(10) { grid-column: span 1; grid-row: span 1; }

  `
}

export default style
