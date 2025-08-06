export function Button({ buttonText, buttonStyle }) {
    return (
      <button className={buttonStyle}>
        {buttonText}
      </button>
    );
  }