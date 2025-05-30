import { useRef, useState } from "preact/hooks";
type MeditationProps = {
  path?: string;
};

export default function Meditation(_props: MeditationProps) {
  const [timeLeft, setTimeLeft] = useState(0); // seconds
  const [customMinutes, setCustomMinutes] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [musicMuted, setMusicMuted] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const alarmRef = useRef<HTMLAudioElement>(null);
  const musicRef = useRef<HTMLAudioElement>(null);

  const updateTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // const startTimer = () => {
  //   if (timeLeft <= 0) {
  //     alert("Pirmiausia nustatykite laiką.");
  //     return;
  //   }

  //   if (!musicMuted && musicRef.current) {
  //     musicRef.current.play();
  //   }

  //   setIsRunning(true);

  //   intervalRef.current = window.setInterval(() => {
  //     setTimeLeft((prev) => {
  //       if (prev <= 1) {
  //         clearInterval(intervalRef.current!);
  //         if (musicRef.current) {
  //           musicRef.current.pause();
  //           musicRef.current.currentTime = 0;
  //         }
  //         alarmRef.current?.play();
  //         setIsRunning(false);
  //         return 0;
  //       }
  //       return prev - 1;
  //     });
  //   }, 1000);
  // };

  const stopTimer = () => {
    clearInterval(intervalRef.current!);
    setIsRunning(false);
    if (musicRef.current) {
      musicRef.current.pause();
      musicRef.current.currentTime = 0;
    }
    setTimeLeft(0);
  };

  const setTime = (minutes: number) => {
    clearInterval(intervalRef.current!);
    setTimeLeft(minutes * 60);
    setIsRunning(false);
    startTimerWithTime(minutes * 60);
  };
  const startTimerWithTime = (seconds: number) => {
    if (seconds <= 0) {
      alert("Pirmiausia nustatykite laiką.");
      return;
    }

    if (!musicMuted && musicRef.current) {
      musicRef.current.play();
    }

    setIsRunning(true);

    intervalRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          if (musicRef.current) {
            musicRef.current.pause();
            musicRef.current.currentTime = 0;
          }
          alarmRef.current?.play();
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const setCustomTime = () => {
    const minutes = parseInt(customMinutes, 10);
    if (!isNaN(minutes) && minutes > 0) {
      setTime(minutes);
    } else {
      alert("Prašome įvesti galiojantį minučių skaičių.");
    }
  };

  const toggleMusic = () => {
    setMusicMuted((prev) => {
      const next = !prev;
      if (next && musicRef.current) {
        musicRef.current.pause();
      } else if (!next && musicRef.current && isRunning) {
        musicRef.current.play();
      }
      return next;
    });
  };

  return (
    <div className="text-center">
      <h1 className="mb-4">Meditacijos Laikmatis</h1>

      {/* Time selection buttons */}
      <div className="button-group mb-3 d-flex flex-wrap justify-content-center gap-2">
        {[1, 3, 5, 10, 15, 20, 30, 45, 60].map((min) => (
          <button
            key={min}
            className="btn btn-outline-primary"
            onClick={() => setTime(min)}
          >
            {min} min
          </button>
        ))}
      </div>

      {/* Custom time input */}
      <div className="mb-4">
        <input
          type="number"
          className="form-control w-50 d-inline"
          placeholder="Įveskite minutes"
          value={customMinutes}
          onInput={(e) =>
            setCustomMinutes((e.target as HTMLInputElement).value)
          }
        />
        <button
          className="btn btn-outline-secondary mt-2"
          onClick={setCustomTime}
        >
          Nustatyti laiką
        </button>
      </div>

      {/* Timer display */}
      <div id="timer" className="timer-display mb-4 fs-2 fw-bold">
        {updateTime(timeLeft)}
      </div>

      {/* Controls */}
      <div className="mb-4">
        {/* <button className="btn btn-success btn-lg me-2" onClick={startTimer}>
          Pradėti
        </button> */}
        <button className="btn btn-danger btn-lg me-2" onClick={stopTimer}>
          Stabdyti
        </button>
        <button className="btn btn-secondary btn-lg" onClick={toggleMusic}>
          {musicMuted ? "Įjungti muziką" : "Nutildyti muziką"}
        </button>
      </div>

      {/* Audio elements */}
      <audio
        ref={alarmRef}
        src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        preload="auto"
      />
      <audio
        ref={musicRef}
        src="https://fine.sunproxy.net/file/VXhJeVAzSzRJNEhqczJRWnZ4d0N6SGJWVG9BT0oyR2x4cFFaa1dHOUd3MktncE94VFdQSXM3eVplNW5LVFdOSUdpV1oxQmp0dzJkOG9iZDRPdzJISU1KY2daSnlhalZEWnAzVzFQRjJHVDA9/Indian_Flute_Meditation_Music_-_Positive_Vibes_Peace_Of_Mind_(Hydr0.org).mp3"
        loop
        preload="auto"
      />
    </div>
  );
}
