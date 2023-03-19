import "./comments.scss";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/Ui/Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Comments = () => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [like, setLike] = useState(false);
  const [date, setDate] = useState(new Date());
  const [newMessageList, setNewMessageList] = useState([]);
  const ref = useRef(null);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateParamsSwitchHelper = (customDate) => {
    switch (customDate.getDate()) {
      case new Date().getDate():
        return (
          <p>
            Сегодня{" "}
            {customDate.toLocaleTimeString(navigator.language, {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        );

      case new Date().getDate() - 1:
        return (
          <p>
            Вчера{" "}
            {customDate.toLocaleTimeString(navigator.language, {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        );

      default:
        return (
          <p>
            {customDate.getDate()} {monthNames[customDate.getMonth()]}{" "}
            {customDate.getUTCFullYear()}
          </p>
        );
    }
  };

  const mapNewMessageList = (newMessageList) => {
    newMessageList.map((e, i) => {
      return (
        <div className="viewport" key={i}>
          {e.comment} {e.name} {dateParamsSwitchHelper(e.date)}
        </div>
      );
    });
  };

  const listener = (event) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      console.log("Enter key was pressed. Run your function.", {
        comment,
        name,
        date,
      });
      event.preventDefault();
      setNewMessageList((p) => [...p, { comment, name, date }]);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [comment, name, date]);

  console.log(newMessageList);

  return (
    <div className="comments container">
      <div className="comments__input">
      <textarea
        ref={ref}
        className="comments__input--text"
        placeholder="Введите комментарий..."
        type="text"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />

      <input
        className="comments__input--name"
        placeholder="Ваше имя"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <DatePicker selected={date} onChange={(date) => setDate(date)} />
      </div>

      <Button
        className="button"
        onClick={() => {
          setNewMessageList((p) => [...p, { comment, name, date, like }]);
        }}
        text="Отправить"
      />

      <Button
        className="button"
        onClick={() => {
          setNewMessageList([]);
        }}
        text="Удалить"
      />

      <div className="comments__like">
        <button onClick={() => setLike(like + 1)}>+1</button>
        <div>{like}</div>
      </div>

      <div>
        {newMessageList.map((e, i) => {
          return (
            <div className="comments__viewport" key={i}>
              {e.comment} {e.name} {dateParamsSwitchHelper(e.date)}
            </div>
          );
        })}
      </div>
    </div>
  );
};
