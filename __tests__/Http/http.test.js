import { http } from "@infrastructure/http";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: "",
      }),
    ok: true,
    status: 200,
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe("Testing Fetch Wrapper Module", () => {
  it("success response", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1 }, { id: 2 }]),
        ok: true,
        status: 200,
      })
    );
    const response = await http.get("/someapireturnarrof2ids");
    expect(response.data.length).toBe(2);
  });

  it("reject response -> 404 ", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        text: () => Promise.resolve('{ "msg": "Resource not found" }'),
        ok: false,
        status: 404,
      })
    );
    const response = await http.get("/someapireturnarrof2ids");
    expect(response).toEqual({
      msg: {
        msg: "Resource not found",
      },
      status: 404,
      data: "",
    });
  });

  it("reject response -> 500 ", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        text: () => Promise.reject("Network Error"),
        ok: false,
        status: 500,
      })
    );
    const response = await http.get("/someapireturnarrof2ids");
    expect(response).toEqual({
      msg: "Unexpected error, please try again later",
      data: "",
      status: 500,
    });
  });
});
