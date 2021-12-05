import React from "react";
import ReactDOM from "react-dom";
import "../vendor/bootstrap/css/bootstrap.min.css";

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title" id="deleteModal">
                  Thêm sinh viên
                </h5>

                <button
                  type="button"
                  className="modal-close-button"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div>
                    <label class="form-group">Họ tên</label>
                    <input class="form-control" />
                  </div>
                  <div>
                    <label class="form-group">Mã số sinh viên</label>
                    <input class="form-control" />
                  </div>
                  <div>
                    <label class="form-group">Lớp</label>
                    <input class="form-control" />
                  </div>
                  <div>
                    <label class="form-group">Khoá</label>
                    <input class="form-control" id="generation" />
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" id="email" />
                  </div>
                  <div class="form-group">
                    <label>Số điện thoại</label>
                    <input class="form-control" id="phone" />
                  </div>
                  <div class="form-group">
                    <label>Địa chỉ</label>
                    <input class="form-control" id="address" />
                  </div>
                  <div class="form-group">
                    <label>Ảnh</label>
                    <input
                      class="form-control"
                      type="file"
                      accept="image/*"
                      id="imgInp"
                    />
                    <img src="" alt="your image" id="image" />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onClick={hide}>
                  Huỷ
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={hide}
                  
                >
                  Sửa
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
