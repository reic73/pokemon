interface IPaginationButton {
  onClick?(): void;
  children?: JSX.Element | string;
  disabled?: boolean;
  selected?: boolean;
}

const PaginationButton = (props: IPaginationButton) => {
  const disabled = props.disabled ? true : false;
  const selected = props.selected ? true : false;

  const baseStyle = 'border border-gray-400 w-full h-12 shadow focus:outline-none';

  const buttonStyle = `${baseStyle} text-blue-500 font-semibold hover:bg-gray-200 `;
  const disabledStyle = `${baseStyle} text-gray-500 font-semibold cursor-not-allowed`;
  const selectedStyle = `${baseStyle} text-gray-700 font-bold`;

  return (
    <button
      type="button"
      className={selected ? selectedStyle : disabled ? disabledStyle : buttonStyle}
      disabled={disabled}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default PaginationButton;
