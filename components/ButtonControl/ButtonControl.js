export const template = (disablePrevious, disableNext) => {
  if (disablePrevious & !disableNext) {
    return `
  <button class="previous" disabled>
    previous
  </button>
  <button class="next">next</button>
`;
  } else if (!disableNext & !disablePrevious) {
    return `
  <button class="previous" >
    previous
  </button>
  <button class="next" >next</button>
`;
  } else if (!disablePrevious & disableNext) {
    return `
  <button class="previous">
    previous
  </button>
  <button class="next" disabled>next</button>
`;
  }
};
