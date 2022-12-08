import React from "react";
import "../styles/components/footer.scss";

interface ICreatedBy {
  name: string;
  role: string;
  gitAddress: string;
  email: string;
}

const Footer = () => {
  const createdBy: Array<ICreatedBy> = [
    {
      name: "KIM SOYEON",
      role: "BACKEND",
      gitAddress: "https://github.com/ksy0429",
      email: "thdus6857@naver.com",
    },
    {
      name: "OH SEUNGJUN",
      role: "FRONTEND",
      gitAddress: "https://github.com/OHHAIO",
      email: "ohseungjun1205@gmail.com",
    },
  ];

  return (
    <>
      <footer>
        <div className="createdBy">
          {createdBy.map((item) => (
            <span className="createdBy__name" key={item.name}>
              {`${item.role} : ${item.name} | ${item.gitAddress} | ${item.email}`}
            </span>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
