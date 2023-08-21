import { useEffect, useState } from "react";
import "./App.css";
import * as Icons from "./components/icons";
import { MUIBox, MUIButton, MUITypography } from "./components/ui-components";
import messages from "./config/messages";

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

function App() {
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState<string>("");

  useEffect(() => {
    let recognition: SpeechRecognition | null = null;
    if (isListening) {
      setTranscription("");
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.onstart = () => {
          console.log("Listening...");
        };

        recognition.onresult = (event: SpeechRecognitionEvent) => {
          const result = event.results[0][0].transcript;
          console.log("🚀 ~ file: App.tsx:31 ~ useEffect ~ result:", result);
          // setTranscription(
          //   (prevTranscription) => prevTranscription + " " + result
          // );
          setTranscription(result);
        };

        recognition.onend = () => {
          setIsListening(false);
          console.log("Closed");
        };

        recognition.start();
      } else {
        console.error(
          "SpeechRecognition is not available in this environment."
        );
      }
    }

    return () => {
      if (recognition) {
        recognition.abort();
      }
    };
  }, [isListening]);

  const handleClick = () => {
    setIsListening(!isListening);
  };

  return (
    <MUIBox className="app">
      <MUIBox className="wrapper">
        <MUIBox className="signal-wrapper">
          <MUIBox
            component="img"
            src={Icons.SignalIcon}
            alt="Image1"
            className="signal-icons1"
          />
          <MUIBox
            component="img"
            src={Icons.WifiIcon}
            alt="Image2"
            className="signal-icons2"
          />
          <MUIBox
            component="img"
            src={Icons.BatteryIcon}
            alt="Image3"
            className="signal-icons3"
          />
        </MUIBox>
        <MUIBox className="transcript-wrapper p-20 m-40">
          <MUITypography
            className={`voice-recog-text ${transcription ? "after" : "before"}`}
          >
            {transcription ? transcription : messages.transcriptText1}
          </MUITypography>
        </MUIBox>
        <MUIBox className="p-20 ">
          <MUITypography className="voice-recog-text">
            {isListening ? messages.transcriptText2 : messages.transcriptText3}
          </MUITypography>
        </MUIBox>
        <MUIBox className="p-20 mb-40">
          <MUIButton
            onClick={handleClick}
            variant="contained"
            iconButton
            size="small"
            className="action-button p-20"
          >
            {isListening ? (
              <MUIBox
                component="img"
                src={Icons.StopIcon}
                alt="mic-icon"
                className="action-button-icon"
              />
            ) : (
              <MUIBox
                component="img"
                src={Icons.MicIcon}
                alt="stop-icon"
                className="action-button-icon"
              />
            )}
          </MUIButton>
        </MUIBox>
        {/* <MUIBox></MUIBox> */}
      </MUIBox>
    </MUIBox>
  );
}

export default App;
