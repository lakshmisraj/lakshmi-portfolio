import { FaAws, FaJava } from 'react-icons/fa6'
import {
  SiApachemaven,
  SiApachetomcat,
  SiCplusplus,
  SiCss,
  SiDjango,
  SiDocker,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiKeras,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiSpringboot,
  SiTensorflow,
} from 'react-icons/si'
import { TbApi, TbInfinity, TbSql } from 'react-icons/tb'
import { competencies, skills } from '../data'
import Reveal, { SectionHead } from './Reveal'

const icons = {
  java: FaJava,
  python: SiPython,
  cpp: SiCplusplus,
  sql: TbSql,
  js: SiJavascript,
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
  git: SiGit,
  cicd: TbInfinity,
  mongo: SiMongodb,
  mysql: SiMysql,
  redis: SiRedis,
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  keras: SiKeras,
  sklearn: SiScikitlearn,
  opencv: SiOpencv,
  numpy: SiNumpy,
  pandas: SiPandas,
  react: SiReact,
  html: SiHtml5,
  css: SiCss,
}

export default function Skills() {
  return (
    <section className="section" aria-labelledby="skills-h" id="skills">
      <div className="container">
        <SectionHead id="skills-h" title="Technical Skills" />
        <Reveal className="skills">
          {skills.map((g) => (
            <div className="skill-row" key={g.group}>
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
            </div>
          ))}
          <div className="skill-row">
            <h3>Core Competencies</h3>
            <ul className="competencies">
              {competencies.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
