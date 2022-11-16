import { GetJobs, PostJob, DeleteJob } from "./JobModel";
import { JobService } from "./JobService";
import { validatorJob } from "./JobValidator";

export class JobController {
  public static getJobs: GetJobs = async (req, res) => {
    try {
      const jobs = await JobService.getJobs()
      res.status(200).json(jobs.rows)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
  public static postJob: PostJob = async (req, res) => {
    const { error } = validatorJob(req.body)
    if (error) {
      return res.status(400).json({ message: error.details[0].message })
    }
    try {
      const newJob = await JobService.postJob(req.body.title)
      res.status(201).json(newJob.rows[0])
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
  public static getJob: DeleteJob = async (req, res) => {
    try {
      const job = await JobService.getJob(req.params.jobId)
      if (job.rows.length === 0) {
        return res.status(404).json({ message: 'Job not found' })
      }
      res.status(200).json(job.rows[0])
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
  public static deleteJob: DeleteJob = async (req, res) => {
    try {
      const deletedJob = await JobService.deleteJob(req.params.jobId)
      if (deletedJob.rows.length === 0) {
        return res.status(404).json({ message: 'Job not found' })
      }
      res.status(200).json(deletedJob.rows[0])
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
}
