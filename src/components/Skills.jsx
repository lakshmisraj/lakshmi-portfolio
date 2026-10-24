import { FaAws, FaJava } from 'react-icons/fa6'
import {
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiGit,
  SiApachemaven,
  SiApachetomcat,
  SiJavascript,
  SiKeras,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiOpensearch,
  SiPandas,
  SiPrometheus,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiSpringboot,
  SiTensorflow,
} from 'react-icons/si'
import { TbApi, TbInfinity, TbSql } from 'react-icons/tb'
import { awsServices, skills } from '../data'
import Reveal, { SectionHead } from './Reveal'

const icons = {
  java: FaJava,
  spring: SiSpringboot,
  api: TbApi,
  node: SiNodedotjs,
  django: SiDjango,
  tomcat: SiApachetomcat,
  maven: SiApachemaven,
  aws: FaAws,
  k8s: SiKubernetes,
  docker: SiDocker,
  linux: SiLinux,
  cicd: TbInfinity,
  git: SiGit,
  prometheus: SiPrometheus,
  mongo: SiMongodb,
  mysql: SiMysql,
  redis: SiRedis,
  opensearch: SiOpensearch,
  python: SiPython,
  cpp: SiCplusplus,
  sql: TbSql,
  js: SiJavascript,
  react: SiReact,
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  keras: SiKeras,
  sklearn: SiScikitlearn,
  opencv: SiOpencv,
  numpy: SiNumpy,
  pandas: SiPandas,
}

export default function Skills() {
  return (
    <section className="section" aria-labelledby="skills-h" id="skills">
      <div className="container">
        <SectionHead
          id="skills-h"
          title="Skills"
          lede="The tools I reach for, grouped by where they sit in a system."
        />
        <div className="skills">
          {skills.map((g, gi) => (
            <Reveal key={g.group} className="skill-group" delay={(gi % 3) * 0.06}>
              <h3>{g.group}</h3>
              <ul>
                {g.items.map(([name, icon]) => {
                  const Icon = icons[icon]
                  return (
                    <li key={name}>
                      {Icon && <Icon aria-hidden="true" />}
                      {name}
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          ))}
          <Reveal className="skill-group skill-aws" delay={0.12}>
            <h3>
              <FaAws aria-hidden="true" /> AWS services I've built with
            </h3>
            <ul>
              {awsServices.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
