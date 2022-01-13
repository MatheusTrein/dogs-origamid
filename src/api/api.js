const baseUrl = 'https://dogsapi.origamid.dev/json';

export const USER_POST = body => {
  return {
    url: `${baseUrl}/api/user`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const USER_GET = token => {
  return {
    url: `${baseUrl}/api/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const TOKEN_POST = body => {
  return {
    url: `${baseUrl}/jwt-auth/v1/token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const TOKEN_VALIDATE_POST = token => {
  return {
    url: `${baseUrl}/jwt-auth/v1/token/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const PHOTO_POST = ({ token, body }) => {
  return {
    url: `${baseUrl}/api/photo`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    },
  };
};

export const PHOTOS_GET = ({ page, total, user }) => {
  return {
    url: `${baseUrl}/api/photo/?_total=${total}&_page=${page}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};

export const PHOTO_USER_GET = ({ id }) => {
  return {
    url: `${baseUrl}/api/photo/?_total=9&_page=1&_user=${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};

export const PHOTO_GET = ({ id }) => {
  return {
    url: `${baseUrl}/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};

export const PHOTO_DELETE = ({ id }) => {
  return {
    url: `${baseUrl}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${JSON.parse(
          window.localStorage.getItem('token'),
        )}`,
      },
    },
  };
};

export const COMMENT_POST = ({ token, id, body }) => {
  return {
    url: `${baseUrl}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body,
    },
  };
};

export const COMMENT_POSTT = (id, body, token) => {
  return {
    url: `${baseUrl}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body,
    },
  };
};

export const LOST_PASSWORD = body => {
  return {
    url: `${baseUrl}/api/password/lost`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const STATS_GET = ({ token }) => {
  return {
    url: `${baseUrl}/api/stats`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};
