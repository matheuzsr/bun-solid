export interface ILog {
  write(information: string): void
}

export class LogCSV implements ILog {
  public write(information: string): void {
    console.log('## CSV |', information)
  }
}

export class LogJSON implements ILog {
  public write(information: string): void {
    console.log('## JSON |', information)
  }
}

export default class LogAdapterService {
  constructor(private logAdapter: ILog) {
    this.setLog(logAdapter)

  }

  setLog(logAdapter: ILog) {
    this.logAdapter = logAdapter
  }

  write(information: string): void {
    this.logAdapter.write(information)
  }
}