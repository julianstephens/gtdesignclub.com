import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import tw, { styled } from "twin.macro";
import PreviewExec from "./previewExec";

const Title = styled.h1`
  ${tw`font-header text-black text-xl mt-8 mb-4`}
`;

const Execs = () => {
  const officers = useStaticQuery(graphql`
    query {
      allContentfulOfficer(sort: { fields: [order] }) {
        edges {
          node {
            major
            name
            position
            photo {
              gatsbyImageData(
                placeholder: BLURRED
                resizingBehavior: FILL
                formats: AUTO
              )
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      <Title>Exec Board</Title>
      {officers && (
        <>
          {officers.allContentfulOfficer.edges.map((exec) => {
            return <PreviewExec exec={exec.node} />;
          })}
        </>
      )}
    </div>
  );
};

export default Execs;
