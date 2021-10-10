
// (c) 2021 Blue Ocean Creators

const textarea_code = document.querySelector( '#code' );
const textarea_output = document.querySelector( '#output' );

const calc_button = document.querySelector( '#calc_button' );
calc_button.addEventListener( 'click', onClickCalcButton );

function onClickCalcButton()
  {
  const result = eval( textarea_code.value );
  textarea_output.textContent = result;
  }



