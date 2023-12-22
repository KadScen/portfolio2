import linkedInLogo from "../assets/linkedin_icon.png";

function ContactButtons() {
  return (
    <div className="p-4">
      <div>
        <a href="https://www.linkedin.com/in/alain-mondely-5a7b9653">
          <img
            src={linkedInLogo}
            alt="LinkedIn link logo"
            width="32px"
            height="32px"
          />
        </a>
      </div>
    </div>
  );
}

export default ContactButtons;
