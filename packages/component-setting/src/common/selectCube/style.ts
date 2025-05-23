import {createStyles} from "antd-style";

export const useStyle = createStyles(({ token, css }) => {
    return {
        selectCube: css`
        .cubeGroup {
          padding: 0;
          list-style: none;
          .cubeItem {
            width: 100%;
            box-sizing: border-box;
            background-color: #eee;
            padding: 0px 10px;
              margin-bottom: 10px;
            display: grid;
              column-gap: 20px;
            grid-template-columns: 1fr 86px;

            .lPart {
              display: grid;
              width: 220px;
              //grid-template-rows: repeat(2, 1fr);
              .title {
                margin-bottom: 0;

                p {
                  color: #595961;
                  font-size: 14px;
                  margin-bottom: 0;
                  height: 43px;
                  line-height: 43px;
                  text-indent: 16px;
                }
              }

              .pickLink {
                  margin-top: 25px;
                  button{
                      padding: 0;
                      margin-top: 20px;
                      margin-bottom: 20px;
                  }
              }
            }

            .rPart {
              display: flex;
              align-items: center;
              .choose-container {
                margin-bottom: 0;
              }
            }
          }
        }
      .pic {
        position: relative;

        .checkBox {
          position: absolute;
          left: 5px;
          top: 2px;
          z-index: 10;
        }
      }

      .picTop {
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 120px;
      }

      .choose-container {
        margin-bottom: 24px;
        cursor: pointer;
        .video {
          position: relative;
        }
        .video::after {
          content: '重选';
          z-index: 100;
          opacity: 0;
          position: absolute;
          left: 0;
          top: 0;
          line-height: 86px;
          text-align: center;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          display: block;
          width: 86px;
          height: 86px;
          transition-duration: 0.3s;
        }
        .video:hover::after {
          opacity: 1;
        }
        .choose {
          box-sizing: border-box;
          border-radius: 4px;
          padding-top: 20px;
          height: 86px;
          width: 86px;
          text-align: center;
          border: 1px #e1e1e1 dashed;
          background-color: #fff;

          p {
            margin-top: 5px;
          }
        }
      }
    `
    }
});
