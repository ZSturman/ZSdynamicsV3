/* type AnalyticsArgs = {
  retention?: number;
};

interface TrackedEvent {
  namespace: string;
  event: object;
  timestamp: Date;
}

export class Analytics {
  private retention: number = 60 * 60 * 24 * 7; // Default retention
  private eventsBuffer: TrackedEvent[] = [];
  private eventThreshold: number = 10; // Adjust as needed
  private sendInterval: number = 4 * 60 * 60 * 1000; // 4 hours in milliseconds
  private intervalId?: ReturnType<typeof setInterval>;

  constructor(opts?: AnalyticsArgs) {
    if (opts?.retention) {
      this.retention = opts.retention;
    }
    this.startPeriodicSend();
  }

  private startPeriodicSend() {
    this.intervalId = setInterval(() => {
      this.sendEvents();
    }, this.sendInterval);
  }

  private async sendEvents() {
    if (this.eventsBuffer.length === 0) {
      return; // Nothing to send
    }
    
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/send-mail/`;
    const eventData = this.eventsBuffer.map(event => ({
      namespace: event.namespace,
      event: event.event,
      timestamp: event.timestamp,
    }));
    
    // Sending the collected events
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "zacharysturman@zsdynamics.com",
        to: "zasturman@gmail.com",
        subject: "ANALYTICS Events",
        text: `Events: ${JSON.stringify(eventData)}`,
      }),
    });

    // Clear the buffer after sending
    this.eventsBuffer = [];
  }

  async track(namespace: string, event: object = {}) {
    this.eventsBuffer.push({ namespace, event, timestamp: new Date() });
    
    if (this.eventsBuffer.length >= this.eventThreshold) {
      await this.sendEvents();
    }
  }
  
  destructor() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

export const analytics = new Analytics();
 */
