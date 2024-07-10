import React from "react";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import AdvisorsComponent from "../components/AdvisorsComponent";
import ScholarshipForm from "../components/ScholarshipForm";
import HomepageAccordions from "../components/HomepageAccordions";

function IndexPage() {
  const advisors = [
    {
      name: "Whitney Smith",
      email: "whitney@example.com",
      phone: "(480) 784-7360",
      avatar:
        "https://ca.slack-edge.com/T04HXDV7TR8-U058ZG5QTQU-d39942833aeb-72",
      description:
        "Whitney has over 10 years of experience in real estate investment and client advisory. She is passionate about helping clients achieve their financial goals. Whitney enjoys hiking and spending time with her family.",
    },
    {
      name: "Senior Advisor",
      email: "senioradvisor@example.com",
      phone: "(480) 123-4567",
      avatar: "",
      description:
        "Our Senior Advisor brings a wealth of knowledge in financial planning and investment strategies. With a background in corporate finance, they provide invaluable insights to our clients. In their spare time, they love reading and gardening.",
    },
  ];
  return (
    <>
      <Container sx={{ mb: 10 }}>
        <Header />
        <ScholarshipForm />
        <HomepageAccordions />
        <AdvisorsComponent advisors={advisors} />
      </Container>
    </>
  );
}

export default IndexPage;
