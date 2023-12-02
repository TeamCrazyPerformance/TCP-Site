import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./Application.module.css";

const Application = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    studentNumber: "",
    motivation: "",
    phoneNumber: "",
    interests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    toast.success(`${formData.name}님 지원을 감사드림니다`);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Student Number:
          <input
            type="text"
            name="studentNumber"
            value={formData.studentNumber}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          지원동기 (Motivation):
          <textarea
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          관심분야 (Areas of Interest):
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default Application;
