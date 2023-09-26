import React from 'react';
import { WrapperContainer, RowContainer } from '..';
import { expertiseContent } from '../../constants';

const Data = () => {
  return (
    <section id="data" className="py-20 background-color">
      <WrapperContainer>
        <h2 className="text-center text-4xl font-light">3000+ Completed Work Which We have Successfully Done</h2>
        <RowContainer className="md:justify-around py-10 flex-col md:flex-row items-center justify-center">
          {expertiseContent.map((blurb, index) => (
            <React.Fragment key={index}>
              <div className={`${index % 2 === 1 ? 'lg:pt-20' : ''}`}>
                <div className="data-cards flex flex-col items-center justify-center my-5 z-20 relative">
                  <p className="text-4xl font-bold">{blurb.number}</p>
                  <h2 className="pb-3 text-sm">{blurb.title}</h2>
                </div>
              </div>
              {index === 1 && (
                <svg
                  key={`svg-${index}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="218"
                  height="97"
                  viewBox="0 0 218 97"
                  fill="none"
                  className="mx-auto rotate-90 lg:rotate-0 z-10"
                >
                  <path d="M0 96H96.5V1H218" stroke="#E0E0E0" strokeWidth="2" />
                </svg>
              )}
              {index !== 1 && index < expertiseContent.length - 1 && (
                <svg
                  key={`svg-${index}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="218"
                  height="98"
                  viewBox="0 0 218 98"
                  fill="none"
                  className="mx-auto rotate-90 lg:rotate-0 z-10"
                >
                  <path d="M0 1H96.5V97H218" stroke="#E0E0E0" strokeWidth="2" />
                </svg>
              )}
            </React.Fragment>
          ))}
        </RowContainer>
      </WrapperContainer>
    </section>
  );
};

export default Data;