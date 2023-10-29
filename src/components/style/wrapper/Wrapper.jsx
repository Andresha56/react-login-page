import styled from "styled-components";

const Wrapper = styled.section`
  /* Common styles for the Wrapper */

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  background-color: #3a3a39;
  .ImageAndLoginFormContainer {
    /* Styles for the image and form container */
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: #272626;
    display: flex;
    gap: 3rem;
    justify-content: center;
    align-items: center;

    .ImageContainer {
      /* Styles for the image container */
      figure {
        img {
          display: block;
          object-fit: cover;
        }
      }
    }

    .formContainer {
      .heading {
        text-align: center;
        padding-bottom: 1.5rem;
      }
      /* Styles for the form container */
      padding: 2.5rem 3rem;
      font-size: 1.6rem;
      form {
        /* Styles for the form */
        background-color: transparent;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        input {
          outline: 0;
          padding: 1rem;
          border: 1px solid #fcb200;
          border-radius: 3px;
          color: black;
        }
        button {
          padding: 1rem;
        }

        .login-options {
          display: flex;
          margin-top: 1rem;
          /* -----check---box--- */
          .checkboxes {
            display: flex;
            flex-direction: column;
            margin-right: 5rem;
            gap: 10px;
            input{
              accent-color:#fcb200 ;
              margin-right: 5px;
            }
          }
        }
        .register-here {
          display: flex;
          align-items: center;
          h2 {
            font-size: 1.6rem;
            font-weight: lighter;
          }
          a {
            margin-left: 0.7rem;
          }
        }
        /* ---submit--btn-- */
        .submit-btn {
          background-color: #f7b527;
          border: 0;
          border-radius: 5px;
          color: #fffff6;
          font-size: 1.6rem;
          font-weight: 600;
          cursor: pointer;
          margin: 1.5rem 0;
        }
      }
    }

    /* -----media---queries---for---respnsiveness--- */
    @media only screen and (max-width: 998px) {
      .ImageContainer {
        width: 300px;
        figure {
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 873px) {
    .ImageAndLoginFormContainer {
      gap: 0;
      width: 90%;
    }
  }

  @media only screen and (max-width: 742px) {
    .ImageAndLoginFormContainer {
      .ImageContainer {
        figure {
          img {
            width: 260px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 684px) {
    .ImageAndLoginFormContainer {
      flex-direction: column;
      height: 94vh;
      .ImageContainer {
        height: 180px;
        figure {
          height: 100%;
          img {
            width: 260px;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    
    .formContainer {
      padding: 0;
      form {
        font-size: 1.4rem;
        gap: 0.8rem;
        input{
          padding: 0.5rem;
        }
        .submit-btn {
          padding: 0.6rem;
          margin: 0.5rem 0;
        }
        .register-here h2{
          font-size: 1.4rem;
        }
      }
      .heading {
      padding-bottom: 1rem;
      font-size: 2rem;
      font-weight: 500;
    }
    .register-here{
      margin-top: -0.4rem;
    }
    }
  }
  }
  @media only screen and (max-width: 468px) {
    .ImageAndLoginFormContainer {
      gap: 0;
      width: 95%;
      padding: 0 2rem;
      box-sizing: border-box;
     
      .ImageContainer {
        height: 140px;
        figure {
          height: 100%;
          img {
            height: 100%;
          }
        }
      }
     
    }
    .login-options {
      flex-wrap: wrap;
      gap:1rem
    }
    .register-here {
      flex-wrap: wrap;
    }
  }


  @media only screen and (max-width: 382px){
    .ImageAndLoginFormContainer{
      height: auto;
      padding: 2rem;
    }
    
    .ImageContainer {
      display: none;
      
    }
  
  }
`;
export default Wrapper;
