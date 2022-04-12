import "reflect-metadata"
import { createConnection } from "typeorm"
import { IndustryUser, InternalUser } from "./entity/User"

const main = async () => {
  const conn = await createConnection()

  const internalUser = {
    name: "Example internal",
    posts: [
      {
        name: "post 1",
      },
      {
        name: "post 2",
      },
    ],
  }

  const industryUser = {
    name: "Example external",
    posts: [
      {
        name: "post 1",
      },
      {
        name: "post 2",
      },
    ],
  }

  const intUserRepo = conn.getRepository(InternalUser)
  const indUserRepo = conn.getRepository(IndustryUser)

  try {
    await intUserRepo.save(internalUser)
    await indUserRepo.save(industryUser)
  } catch (e) {
    await intUserRepo.query('TRUNCATE internal.user CASCADE')
    await indUserRepo.query('TRUNCATE industry.user CASCADE')
  }

  conn.close()
}

main()
