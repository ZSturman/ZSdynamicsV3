type AnalyticsArgs = {
  retention?: number;
};

export class Analytics {
  private retention: number = 60 * 60 * 24 * 7;

  constructor(opts?: AnalyticsArgs) {
    if (opts?.retention) this.retention = opts.retention;
  }

  async track(namespace: string, event: object = {}) {
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/send-mail/`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "zacharysturman@zsdynamics.com",
        to: "zasturman@gmail.com",
        subject: "ANALYTICS Event",
        text: `Namespace: ${namespace}, Event: ${JSON.stringify(event)}`,
      }),
    });
  }
}

export const analytics = new Analytics();
