export class HttpClient {
  async get<T>(url: string = '', options: RequestInit = { headers: {} }): Promise<T> {
    options.headers = options.headers || {}
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })
    if (response.status >= 400) {
      throw await response.json()
    }
    return (await response.json()) as T
  }
  async put<T>(
    url: string = '',
    data: any = {},
    options: RequestInit = { headers: {} },
  ): Promise<T> {
    options.headers = options.headers || {}
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'PUT',
      cache: 'no-cache',
      credentials: 'same-origin',
      referrerPolicy: 'no-referrer',
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
    })

    if (response.status >= 400) {
      throw await response.json()
    }
    return (await response.json()) as T
  }
  async post<T>(
    url: string = '',
    data: any = {},
    options: RequestInit = { headers: {} },
  ): Promise<T> {
    options.headers = options.headers || {}
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      referrerPolicy: 'no-referrer',
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
    })

    if (response.status >= 400) {
      throw await response.json()
    }
    return (await response.json()) as T
  }
  async upload<T>(
    url: string = '',
    { file, purpose }: any,
    options: RequestInit = { headers: {} },
  ): Promise<T> {
    options.headers = options.headers || {}
    const formData = new FormData()
    formData.set('file', file)
    formData.set('purpose', purpose)
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      referrerPolicy: 'no-referrer',
      ...options,
      headers: {
        ...options.headers,
      },
      body: formData,
    })

    if (response.status >= 400) {
      throw await response.json()
    }
    return (await response.json()) as T
  }
}
