interface ILog {
  write(information: string): void
}

class LogCSV implements ILog {
  public write(information: string): void {
    console.log('## CSV |', information)
  }
}

class LogJSON implements ILog {
  public write(information: string): void {
    console.log('## JSON |', information)
  }
}

type Log = 'CSV' | 'JSON'
export default class LogService {
  public write(log: Log, information: string): void {
    if (log === "CSV") {
      const instanceLog = new LogCSV()
      instanceLog.write(information)
    }

    if (log === "JSON") {
      const instanceLog = new LogJSON()
      instanceLog.write(information)
    }

  }
}