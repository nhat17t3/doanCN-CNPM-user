import React, { useEffect, useState } from "react";
import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updatePost , getListPostByToken } from "../../../actions";
import Layout from "../../../components/Layout";


EditPost1.propTypes = {};

EditPost1.defaultProps = {};

function EditPost1(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { postId } = useParams();
  // const userID = useSelector((state) => state.auth.user.id);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState([]);
  const [grade, setGrade] = useState("");
  const [price, setPrice] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const [sang_2, setSang_2] = useState(false);
  const [chieu_2, setChieu_2] = useState(false);
  const [toi_2, setToi_2] = useState(false);
  const [sang_3, setSang_3] = useState(false);
  const [chieu_3, setChieu_3] = useState(false);
  const [toi_3, setToi_3] = useState(false);
  const [sang_4, setSang_4] = useState(false);
  const [chieu_4, setChieu_4] = useState(false);
  const [toi_4, setToi_4] = useState(false);
  const [sang_5, setSang_5] = useState(false);
  const [chieu_5, setChieu_5] = useState(false);
  const [toi_5, setToi_5] = useState(false);
  const [sang_6, setSang_6] = useState(false);
  const [chieu_6, setChieu_6] = useState(false);
  const [toi_6, setToi_6] = useState(false);
  const [sang_7, setSang_7] = useState(false);
  const [chieu_7, setChieu_7] = useState(false);
  const [toi_7, setToi_7] = useState(false);
  const [sang_8, setSang_8] = useState(false);
  const [chieu_8, setChieu_8] = useState(false);
  const [toi_8, setToi_8] = useState(false);

  const [a, setA] = useState(false);

  useEffect(() => {
    dispatch(getListPostByToken());
  }, []);

  const editedPost = useSelector((state) => {
    const foundPost = state.posts.listPostByToken.find((x) => x.id === +postId);
    return foundPost;
  });
  console.log("editttpost", editedPost);

  useEffect(() => {
    if (editedPost != null) {
      let b = [];
      for (const a of editedPost.subject) {
        let c = { label: a, value: a };
        b.push(c);
      }
      setTitle(editedPost.title);
      setSubject(b);
      setGrade(editedPost.grade);
      setPhonenumber(editedPost.phonenumber);
      setAddress(editedPost.address);
      setPrice(editedPost.price);
      setDescription(editedPost.description);

      setSang_2(editedPost.schedules.sang_2);
      setChieu_2(editedPost.schedules.chieu_2);
      setToi_2(editedPost.schedules.toi_2);
      setSang_3(editedPost.schedules.sang_3);
      setChieu_3(editedPost.schedules.chieu_3);
      setToi_3(editedPost.schedules.toi_3);
      setSang_4(editedPost.schedules.sang_4);
      setChieu_4(editedPost.schedules.chieu_4);
      setToi_4(editedPost.schedules.toi_4);
      setSang_5(editedPost.schedules.sang_5);
      setChieu_5(editedPost.schedules.chieu_5);
      setToi_5(editedPost.schedules.toi_5);
      setSang_6(editedPost.schedules.sang_6);
      setChieu_6(editedPost.schedules.chieu_6);
      setToi_6(editedPost.schedules.toi_6);
      setSang_7(editedPost.schedules.sang_7);
      setChieu_7(editedPost.schedules.chieu_7);
      setToi_7(editedPost.schedules.toi_7);
      setSang_8(editedPost.schedules.sang_cn);
      setChieu_8(editedPost.schedules.chieu_cn);
      setToi_8(editedPost.schedules.toi_cn);
    }
  }, [editedPost, a]);

  const optionAddress = (
    <>
      <option value="" hidden>
        ?????a ch???
      </option>
      <option value={"Li??n Chi???u"}>Li??n Chi???u</option>
      <option value={"Ng?? H??nh S??n"}>Ng?? H??nh S??n</option>
      <option value={"S??n Tr??"}>S??n Tr??</option>
      <option value={"Thanh Kh??"}>Thanh Kh??</option>
      <option value={"Ho?? Vang"}>Ho?? Vang</option>
      <option value={"H???i Ch??u"}>H???i Ch??u</option>
    </>
  );

  const optionSubject = [
    { label: "To??n ", value: "To??n" },
    { label: "L?? ", value: "L??" },
    { label: "H??a", value: "H??a" },
    { label: "Ti???ng Anh", value: "Ti???ng Anh" },
    { label: "Ng??? V??n", value: "Ng??? V??n" },
    { label: "Ti???ng Vi???t", value: "Ti???ng Vi???t" },
    { label: "L???ch S???", value: "L???ch S???" },
  ];

  const optionGrade = (
    <>
      <option value="" hidden>
        L???p
      </option>
      <option value={"L???p 1"}>l???p 1</option>
      <option value={"L???p 2"}>l???p 2</option>
      <option value={"L???p 3"}>l???p 3</option>
      <option value={"L???p 4"}>l???p 4</option>
      <option value={"L???p 5"}>l???p 5</option>
      <option value={"L???p 6"}>l???p 6</option>
      <option value={"L???p 7"}>l???p 7</option>
      <option value={"L???p 8"}>l???p 8</option>
      <option value={"L???p 9"}>l???p 9</option>
      <option value={"L???p 10"}>l???p 10</option>
      <option value={"L???p 11"}>l???p 11</option>
      <option value={"L???p 12"}>l???p 12</option>
    </>
  );

  const editpost = async (e) => {
    let listSubject = [];
    for (const a of subject) {
      listSubject.push(a.value);
    }
    e.preventDefault();
    const form = {
      id: Number(postId),
      title,
      grade,
      subject: listSubject,
      price,
      phonenumber,
      address,
      description,
      finishDate : "",
      schedules: {
        sang_2,
        chieu_2,
        toi_2,
        sang_3,
        chieu_3,
        toi_3,
        sang_4,
        chieu_4,
        toi_4,
        sang_5,
        chieu_5,
        toi_5,
        sang_6,
        chieu_6,
        toi_6,
        sang_7,
        chieu_7,
        toi_7,
        sang_cn :sang_8,
        chieu_cn :chieu_8,
        toi_cn: toi_8,
      },
    };
    console.log(form);
    // alert(JSON.stringify(k));

    await dispatch(updatePost(form))
    history.push("/listpost");
  };

  const v = useSelector((state) => state.posts.listPostByToken);
  if (v.length == 0) return null;

  return (
    <>
      <Layout>
        <form className="app__container" onSubmit={editpost}>
          <div className="grid">
            <h2 className="addpost__heading">
              M?? T??? Y??U C???U T??M GIA S?? C???A B???N
            </h2>
            <div className="addpost__separate" />
            <div className="addpost__content">
              <div className="addpost__title">
                <div className="form__group">
                  <div className="form__lable">
                    T??m t???t y??u c???u t??m gia s?? ( M???t c??u, t???i ??a 100 k?? t??? )
                  </div>
                  <input
                    type="text"
                    className="form__input"
                    placeholder="V?? d???: T??m gia s?? ti???ng anh l???p 7 t???i Ho??n ki???m, H?? N???i"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="grid__row">
                  <div className="grid__column-6">
                    <div className="form__group">
                      <div className="form__lable">M??n h???c</div>
                      {/* <select
                      name="subject"
                      id
                      className="form__input"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    >
                      <option value selected hidden>
                        M??n
                      </option>
                      {optionSubject}
                    </select> */}
                      <MultiSelect
                        options={optionSubject}
                        value={subject}
                        onChange={setSubject}
                        className="form__input-select"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid__column-6">
                    <div className="form__group">
                      <div className="form__lable">L???p</div>
                      <select
                        name="grade"
                        id
                        className="form__input"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        required
                      >
                        {optionGrade}
                      </select>
                    </div>
                  </div>
                  <div className="grid__column-6">
                    <div className="form__group">
                      <div className="form__lable">?????a ch???</div>
                      <select
                        name="address"
                        id
                        className="form__input"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      >
                        {optionAddress}
                      </select>
                    </div>
                  </div>
                  <div className="grid__column-6">
                    <div className="form__group">
                      <div className="form__lable">S??? ??i???n tho???i</div>
                      <input
                        type="number"
                        name="phonenumber"
                        className="form__input"
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid__column-6">
                    <div className="form__group">
                      <div className="form__lable">H???c ph??</div>
                      <input
                        type="number"
                        name="price"
                        className="form__input"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid__column-12">
                    <div className="form__group">
                      <div className="form__lable">
                        M?? t??? chi ti???t n???i dung mu???n h???c
                      </div>
                      <textarea
                        name="description"
                        cols={30}
                        rows={6}
                        className="form__input"
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        value={description}
                      >
                        {description}
                      </textarea>
                    </div>
                  </div>
                  <div className="grid__column-12">
                    <div className="form__group">
                      <div className="form__lable">Th???i gian c?? th??? h???c</div>
                      <div className="calendar-commment">
                        ( M??u XANH hi???n th??? nh???ng l???ch c?? th??? h???c )
                      </div>

                      <div className="calender">
                        <div className="calendar__row">
                          <h3 className="calendar__heading">Th??? 2</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_2
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_2"
                                  value={sang_2}
                                  onChange={() => setSang_2(!sang_2)}
                                />
                                S??ng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_2
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_2"
                                  onChange={() => setChieu_2(!chieu_2)}
                                />
                                Chi???u
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_2
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_2"
                                  onChange={() => setToi_2(!toi_2)}
                                />
                                T???i
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Th??? 3</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_3
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_3"
                                  onChange={() => setSang_3(!sang_3)}
                                />
                                S??ng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_3
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_3"
                                  onChange={() => setChieu_3(!chieu_3)}
                                />
                                Chi???u
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_3
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_3"
                                  onChange={() => setToi_3(!toi_3)}
                                />
                                T???i
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Th??? 4</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_4
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_4"
                                  onChange={() => setSang_4(!sang_4)}
                                  defaultValue="sang_4"
                                />
                                S??ng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_4
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_4"
                                  defaultValue="chieu_4"
                                  onChange={() => setChieu_4(!chieu_4)}
                                />
                                Chi???u
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_4
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_4"
                                  defaultValue="toi_4"
                                  onChange={() => setToi_4(!toi_4)}
                                />
                                T???i
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Th??? 5</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_5
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_5"
                                  defaultValue="sang_5"
                                  onChange={() => setSang_5(!sang_5)}
                                />
                                S??ng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_5
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_5"
                                  defaultValue="chieu_5"
                                  onChange={() => setChieu_5(!chieu_5)}
                                />
                                Chi???u
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_5
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_5"
                                  defaultValue="toi_5"
                                  onChange={() => setToi_5(!toi_5)}
                                />
                                T???i
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Th??? 6</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_6
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_6"
                                  defaultValue="sang_6"
                                  onChange={() => setSang_6(!sang_6)}
                                />
                                S??ng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_6
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_6"
                                  defaultValue="chieu_6"
                                  onChange={() => setChieu_6(!chieu_6)}
                                />
                                Chi???u
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_6
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_6"
                                  defaultValue="toi_6"
                                  onChange={() => setToi_6(!toi_6)}
                                />
                                T???i
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Th??? 7</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_7
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_7"
                                  defaultValue="sang_7"
                                  onChange={() => setSang_7(!sang_7)}
                                />
                                S??ng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_7
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_7"
                                  defaultValue="chieu_7"
                                  onChange={() => setChieu_7(!chieu_7)}
                                />
                                Chi???u
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_7
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_7"
                                  defaultValue="toi_7"
                                  onChange={() => setToi_7(!toi_7)}
                                />
                                T???i
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Ch??? nh???t</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_8
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_8"
                                  defaultValue="sang_8"
                                  onChange={() => setSang_8(!sang_8)}
                                />
                                S??ng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_8
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_8"
                                  defaultValue="chieu_8"
                                  onChange={() => setChieu_8(!chieu_8)}
                                />
                                Chi???u
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_8
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_8"
                                  defaultValue="toi_8"
                                  onChange={() => setToi_8(!toi_8)}
                                />
                                T???i
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn--primary addpost-submit"
                    type="submit"
                    // disabled={isSubmitting}
                  >
                    C???p nh???t
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Layout>
    </>
  );
}

export default EditPost1;
