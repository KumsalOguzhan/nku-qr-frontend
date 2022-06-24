import React, { useState } from "react";
import { Form, FormGroup, Label, Button, Col, Row } from "reactstrap";
import QRCode from "react-qr-code";
import { useEffect } from "react";
import api from "../../services/api";
import { Field, Formik } from "formik";
import * as Yup from "yup";

const Qr = () => {
  const [lectures, setLectures] = useState();
  const [lectureId, setLectureId] = useState(5);
  const [subjects, setSubjects] = useState();

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await api.get("/lecture");
        setLectures(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log("Error: " + err.message);
        }
      }
    };
    fetchLectures();
  }, []);
  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await api.get("/subject");
        setSubjects(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log("Error: " + err.message);
        }
      }
    };
    fetchLectures();
  }, []);

  const handleSubjectName = (id) => {
    return subjects?.find((item) => item.SubjectID === id);
  };

  return (
    <div>
      <Row>
        <Col>
          <h1>Ders Seçin</h1>
        </Col>
        <Col>
          <h1>Üretilen Qr</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Formik
            initialValues={{
              LectureID: Number(),
            }}
            onSubmit={(values) => {
              setLectureId(values.LectureID);
            }}
          >
            {({
              handleSubmit,
              handleChange,
              setFieldValue,
              values,
              errors,
            }) => (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="LectureID">Ders</Label>
                  <Field
                    type="number"
                    as="select"
                    className="form-select"
                    name="LectureID"
                    values={values.LectureID}
                    onChange={handleChange}
                  >
                    <option selected value="default">
                      Ders Seçiniz
                    </option>
                    {lectures &&
                      lectures.map((lecture) => (
                        <option value={lecture.LectureID}>
                          {handleSubjectName(lecture?.SubjectID)?.Name}
                        </option>
                      ))}
                  </Field>
                  {errors.LectureID && errors.LectureID ? (
                    <div className="text-danger">* {errors.LectureID}</div>
                  ) : null}
                  <Button type="submit" className="mt-2" color="primary">
                    Qr üret
                  </Button>
                </FormGroup>
              </Form>
            )}
          </Formik>
        </Col>
        <Col>
          <div>
            <QRCode
              size={256}
              className="w-50"
              value={lectureId}
              viewBox={`0 0 256 256`}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Qr;
