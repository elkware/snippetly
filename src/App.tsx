import {useEffect, useState} from "react";

import html2canvas from "html2canvas";
import {enableTabToIndent} from "indent-textarea";
import {languages, highlightAll} from "./prismHelper";

import './App.css';

import About from "./components/About";
import Header from "./components/Header";

export default function Home() {

  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    highlightAll();
  }, [code, language]);


  useEffect(() => {
    const textarea = document.getElementById('codeArea');
    enableTabToIndent([textarea as HTMLTextAreaElement]);
  }, []);

  const changeTheme = (theme: string) => {
    const t = document.getElementById('prism-theme') as HTMLLinkElement;
    t.href = `/css/prism-${theme}.css`;
  }

  const setLng = (lng: string) => {
    if (lng === "") {
      return;
    }
    const element = document.getElementById('highlightedCode') as HTMLElement;
    element.classList.remove(`language-${language}`);
    element.classList.add(`language-${lng}`);
    setLanguage(lng);
  }


  return (
      <>
        <About state={showAbout} setState={setShowAbout}/>
        <Header setShowAbout={setShowAbout}/>
        <section className={"container"}>
          <h1>Create awsome code snippets</h1>
          <p>
            Select a language, a theme, paste your code and download or copy the image of your code snippet!
          </p>

          <div className={"grid"}>
            <div>
              <label>Language</label>
              <select onChange={event => setLng(event.target.value)} placeholder={"Select a language..."}>
                <option value={""}>Select a language...</option>
                {
                  languages.map(
                      (lng, index) => {
                        return <option key={index} value={lng.value}>{lng.name}</option>
                      }
                  )
                }
              </select>
            </div>
            <div>
              <label>Theme</label>
              <select onChange={e => changeTheme(e.target.value)}>
                <option value={"one-dark"}>Dark</option>
                <option value={"one-light"}>Light</option>
              </select>
            </div>
          </div>
          <textarea
              id={"codeArea"}
              className={"codeEditor"}
              placeholder={"Enter your code here"}
              onChange={event => setCode(event.target.value)}
          >
                </textarea>
          <pre id={"theCode"} className={"line-numbers"}><code
              id={"highlightedCode"} className={`language-${language}`}>{code.trim()}</code></pre>
          <div className={"grid"}>
            <div>
              <button className={"btn"} onClick={() => {
                const element = document.querySelector("#theCode") as HTMLElement;

                html2canvas(element, {
                  scrollX: -window.scrollX,
                  scrollY: -window.scrollY,
                  width: element.scrollWidth,
                  height: element.scrollHeight,
                  backgroundColor: null,
                  scale: 2
                }).then(canvas => {
                      const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
                      const link = document.createElement('a');
                      link.download = `code.png`;
                      link.href = image;
                      link.click();
                    }
                );

              }
              }>Download image
              </button>
            </div>
            <div>
              <button className={"btn"} onClick={() => {
                const element = document.querySelector("#theCode") as HTMLElement;

                html2canvas(element, {
                  scrollX: -window.scrollX,
                  scrollY: -window.scrollY,
                  width: element.scrollWidth,
                  height: element.scrollHeight,
                  backgroundColor: null,
                  scale: 2
                }).then(canvas => {
                      canvas.toBlob(blob => {
                            blob && navigator.clipboard.write([new ClipboardItem({'image/png': blob})]);
                          }
                      )
                    }
                );

              }
              }>Copy image to clipboard
              </button>
            </div>
          </div>
        </section>


      </>
  );
}