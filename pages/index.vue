<template>
  <!-- fluid prop to extend its full width -->
  <v-container fluid>
    <v-layout column>
      <v-flex>
        <v-card flat color="light-green lighten-4">
          <v-layout row>
            <v-flex md4>
              <v-avatar :tile="false" :size="150" class="avatar">
                <v-img :src="profileImage"></v-img>
              </v-avatar>
            </v-flex>
            <v-flex md8>
              <v-card-text>
                <p class="display-1">Shumpei Koike</p>
                <p class="subheading grey--text">Full stack developer</p>
                <p>
                  Professional Developer with more than four years of experience
                  in the bussiness development processes.
                </p>
                <p class="subheading grey--text">shunpei42ba@gmail.com / +9064587898</p>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card flat color="teal lighten-5">
          <v-card-text>
            <v-layout row justify-center wrap>
              <v-flex md4 sm6>
                <v-btn
                  flat
                  small
                  color="primary"
                  href="https://www.linkedin.com/in/%E9%A7%BF%E5%B9%B3-%E5%B0%8F%E6%B1%A0-24aa4a161/?locale=en_US"
                >
                  <v-img :src="linkedInIcon" width="25"></v-img>
                  <span class="sns-label-wrapper">LinkedIn</span>
                </v-btn>
              </v-flex>
              <v-flex md4 sm6>
                <v-btn
                  flat
                  small
                  color="primary"
                  href="https://www.facebook.com/shunpei.koike.9"
                >
                  <v-img :src="facebookIcon" width="25"></v-img>
                  <span class="sns-label-wrapper">Facebook</span>
                </v-btn>
              </v-flex>
              <v-flex md4 sm6>
                <v-btn
                  flat
                  small
                  color="primary"
                  href="https://github.com/shunp"
                >
                  <v-img :src="githubIcon" width="25"></v-img>
                  <span class="sns-label-wrapper">GitHub</span>
                </v-btn>
              </v-flex>
              <v-flex md4 sm6>
                <v-btn
                  flat
                  small
                  color="primary"
                  href="https://qiita.com/shunp"
                >
                  <v-img :src="qiitaIcon" width="25"></v-img>
                  <span class="sns-label-wrapper">Qiita</span>
                </v-btn>
              </v-flex>
              <v-flex md4 sm6>
                <v-btn
                  flat
                  small
                  color="primary"
                  href="https://www.youtube.com/watch?v=U8xlmurP-6o&t=16s"
                >
                  <v-img :src="youtubeIcon" width="25"></v-img>
                  <span class="sns-label-wrapper">YouTube</span>
                </v-btn>
              </v-flex>
              <v-flex md4 sm6>
                <v-btn
                  flat
                  small
                  color="primary"
                  href="https://speakerdeck.com/shunp"
                >
                  <v-img :src="linkedInIcon" width="25"></v-img>
                  <span class="sns-label-wrapper">SpeakerDeck</span>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card-text>
          <p class="display-1 font-weight-regular green--text">SUMMARY</p>
          <v-divider/>
        </v-card-text>
        <v-card-text>
          <p>- Experienced from backend to frontend widely</p>
          <p>
            - Architected and developed the cryptocurrency wallet system for
            enterprise
          </p>
          <p>
            - Selected as one of the best architecture by AWS for the first time in financial industry of Japan (This is
            My Architecture 2018)
          </p>
          <p>
            - Wrote a lot of articles of technologies and gave a lot of
            presentation
          </p>
          <p>
            - Published the book of the blockchain and smart contract in Japan
            (Sep.2019 Scheduled)
          </p>
        </v-card-text>
        <v-card-text>
          <p class="display-1 font-weight-regular green--text">WORK EXPERIENCE</p>
          <v-divider/>
        </v-card-text>
        <v-card-text>
          <p class="title font-weight-regular green--text">Blockchain R&D / Tech Lead / Simplex.Inc</p>
          <p class="subheading font-weight-regular font-italic grey--text">Jan.2019 - (Now)</p>
          <p>- Developed a platform of ICO/STO using a Ethereum</p>
          <p>
            - Published original coin (SimplexToken) and connected some other
            tools to operate in-house tasks
          </p>
          <p>- Planned some new applications using a Blockchain and developed as PoC</p>
          <p>- Designed as microservices and building systems</p>
          <p class="font-weight-regular grey--text">Solidity/Go/TypeScript/Nuxt/Kubernetes/Flutter/AWS</p>
        </v-card-text>
        <v-divider/>
        <v-card-text>
          <p
            class="title font-weight-regular green--text"
          >Cryptocurrency Wallet / Development Lead / Simplex.Inc</p>
          <p class="subheading font-weight-regular font-italic grey--text">Jan.2018 - Dec.2018</p>
          <p>- Architected a whole system for enterprise</p>
          <p>- Created a coding rule of Java/JavaScript and reviewing</p>
          <p>- Investigated a Bitcoin/Ethereum/Ripple to connect our wallet system</p>
          <p class="font-weight-regular grey--text">
            SpringBoot/Node.js/Vue.js/Puppeteer/BitcoinCli/Geth/AWS(More than 30
            services including serverless)
          </p>
        </v-card-text>
        <v-divider/>
        <v-card-text>
          <p
            class="title font-weight-regular green--text"
          >DMM Bitcoin / Development Sub Lead / Simplex.Inc</p>
          <p class="subheading font-weight-regular font-italic grey--text">Aug.2017 - Dec.2017</p>
          <p>- Designed and developing some functions</p>
          <p class="font-weight-regular grey--text">SpringFramework/Backbone.js/Ansible/Oracle/VMware</p>

          <v-divider/>
        </v-card-text>
        <v-card-text>
          <p
            class="title font-weight-regular green--text"
          >DMM Banusy / Development member / Simplex.Inc</p>
          <p class="subheading font-weight-regular font-italic grey--text">Aug.2016 - Jul.2017</p>
          <p>- Designed and developing some functions</p>
          <p class="font-weight-regular grey--text">SpringBoot/Thymeleaf/React/Docker/MariaDB/AWS/DDD</p>
        </v-card-text>
        <v-divider/>
        <v-card-text>
          <p
            class="title font-weight-regular green--text"
          >Original EC System / Development member / Ginga Software Co.</p>
          <p class="subheading font-weight-regular font-italic grey--text">Sep.2015 - Mar.2016</p>
          <p>- Designed and developing some functions</p>
          <p class="font-weight-regular grey--text">Struts2/MyBatis/jQuery/DBUnit/MySQL</p>
        </v-card-text>
        <v-card-text>
          <p class="display-1 font-weight-regular green--text">Education and Training</p>
          <v-divider/>
        </v-card-text>
        <v-card-text>
          <p>Bachelor of Science: B.E. Applied Electronics 2016</p>
          <p>TOKYO UNIVERSITY OF SCIENCE</p>
        </v-card-text>
        <v-card-text>
          <p class="display-1 font-weight-regular green--text">SKILL</p>
          <v-divider/>
        </v-card-text>
        <v-card-text>
        <p class="subheading font-weight-regular green--text">Frontend</p>
        <v-layout row>
          <v-flex md12>
            <v-chip color="teal darken-4" text-color="white">
              <v-avatar>
                <v-icon>check_circle</v-icon>
              </v-avatar>Nuxt.js/Vue.js
            </v-chip>
            <v-chip color="teal lighten-3" text-color="white">
              <v-avatar>
                <v-icon>check_circle</v-icon>
              </v-avatar>TypeScript
            </v-chip>
            <v-chip color="teal lighten-3" text-color="white">
              <v-avatar>
                <v-icon>check_circle</v-icon>
              </v-avatar>jQuery
            </v-chip>
            <v-chip color="teal lighten-3" text-color="white">
              <v-avatar>
                <v-icon>check_circle</v-icon>
              </v-avatar>React
            </v-chip>
            <v-chip color="teal lighten-3" text-color="white">
              <v-avatar>
                <v-icon>check_circle</v-icon>
              </v-avatar>Aframe
            </v-chip>
            <v-chip color="teal lighten-3" text-color="white">
              <v-avatar>
                <v-icon>check_circle</v-icon>
              </v-avatar>SCSS
            </v-chip>
            <v-chip color="teal darken-1" text-color="white">
              <v-avatar>
                <v-icon>check_circle</v-icon>
              </v-avatar>Material Design
            </v-chip>
          </v-flex>
        </v-layout>
        </v-card-text>
        <v-card-text>
          <p class="subheading font-weight-regular green--text">Mobile</p>
          <v-layout row>
            <v-flex md12>
              <v-chip color="teal darken-1" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Flutter/Dart
              </v-chip>
              <v-chip color="teal darken-1" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>ARKit/Swift
              </v-chip>
              <v-chip color="teal lighten-3" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Unity/C#
              </v-chip>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-text>
          <p class="subheading font-weight-regular green--text">Backend</p>
          <v-layout row>
            <v-flex md12>
              <v-chip color="teal darken-4" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>SpringBoot/Java
              </v-chip>
              <v-chip color="teal lighten-3" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>SpringBoot/Kotlin
              </v-chip>
              <v-chip color="teal darken-1" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Chi/Go
              </v-chip>
              <v-chip color="teal darken-1" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Express/JS
              </v-chip>
              <v-chip color="teal lighten-3" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Rust
              </v-chip>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-text>
          <p class="subheading font-weight-regular green--text">Blockchain</p>
          <v-layout row>
            <v-flex md12>
              <v-chip color="teal darken-4" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Truffle/Solidity
              </v-chip>
              <v-chip color="teal darken-4" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>MetaMask/Web3.js
              </v-chip>
              <v-chip color="teal darken-4" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Token(FT/NFT)
              </v-chip>
              <v-chip color="teal lighten-3" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Ethereum2.0
              </v-chip>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-text>
          <p class="subheading font-weight-regular green--text">Cloud</p>
          <v-layout row>
            <v-flex md12>
              <v-chip color="teal darken-4" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>AWS
              </v-chip>
              <v-chip color="teal lighten-3" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>GCP
              </v-chip>
              <v-chip color="teal darken-1" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Firebase
              </v-chip>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-text>
          <p class="subheading font-weight-regular green--text">Container/Microservices</p>
          <v-layout row>
            <v-flex md12>
              <v-chip color="teal darken-4" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Docker
              </v-chip>
              <v-chip color="teal darken-1" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Kubernetes
              </v-chip>
              <v-chip color="teal darken-1" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Kustomize
              </v-chip>
              <v-chip color="teal darken-1" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>EKS
              </v-chip>
              <v-chip color="teal darken-1" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>ECS
              </v-chip>
              <v-chip color="teal lighten-3" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Envoy
              </v-chip>
              <v-chip color="teal lighten-3" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Istio
              </v-chip>
              <v-chip color="teal lighten-3" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>AppMesh
              </v-chip>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-text>
          <p class="subheading font-weight-regular green--text">Protocol</p>
          <v-layout row>
            <v-flex md12>
              <v-chip color="teal darken-4" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>REST
              </v-chip>
              <v-chip color="teal darken-1" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>gRPC/ProtocolBuffer
              </v-chip>
              <v-chip color="teal lighten-3" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>GraphQL
              </v-chip>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-text>
          <p class="subheading font-weight-regular green--text">DevOps</p>
          <v-layout row>
            <v-flex md12>
              <v-chip color="teal darken-4" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>CodePipeline
              </v-chip>
              <v-chip color="teal darken-4" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>CodeCommit
              </v-chip>
              <v-chip color="teal darken-4" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>CodeBuild
              </v-chip>
              <v-chip color="teal darken-4" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>ECR
              </v-chip>
              <v-chip color="teal darken-4" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Cloud9
              </v-chip>
              <v-chip color="teal darken-4" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Amplify Console
              </v-chip>
              <v-chip color="teal lighten-3" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>CloudFormation
              </v-chip>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-text>
          <p class="subheading font-weight-regular green--text">Database</p>
          <v-layout row>
            <v-flex md12>
              <v-chip color="teal darken-4" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>MySQL/MariaDB
              </v-chip>
              <v-chip color="teal darken-4" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Aurora
              </v-chip>
              <v-chip color="teal lighten-3" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>PostgreSQL
              </v-chip>
              <v-chip color="teal lighten-3" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Oracle
              </v-chip>
              <v-chip color="teal darken-1" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>Redis
              </v-chip>
              <v-chip color="teal darken-4" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>DynamoDB
              </v-chip>
              <v-chip color="teal lighten-3" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>MongoDB
              </v-chip>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProfileImage from '~/assets/image/profile.jpg'
import LinkedInIcon from '~/assets/icon/linkedin.svg'
import FacebookIcon from '~/assets/icon/facebook.svg'
import GitHubIcon from '~/assets/icon/github.svg'
import QiitaIcon from '~/assets/icon/qiita.svg'
import YouTubeIcon from '~/assets/icon/youtube.svg'
import GmailIcon from '~/assets/icon/gmail.svg'
import SlidesIcon from '~/assets/icon/slides.svg'


export default {
  components: {},
  data() {
    return {
      profileImage: ProfileImage,
      linkedInIcon: LinkedInIcon,
      facebookIcon: FacebookIcon,
      githubIcon: GitHubIcon,
      qiitaIcon: QiitaIcon,
      youtubeIcon: YouTubeIcon,
      gmailIcon: GmailIcon,
      slidesIcon: SlidesIcon
    }
  },
  created: function() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/serviceworker.js')
        .then(registration => {
          registration.onupdatefound = function() {
            console.log('update')
            registration.update()
          }
        })
        .catch(err => {
          console.err(err)
        })
    }
  }
}
</script>
<style scoped>
.top {
  background-color: grey;
}
.avatar {
  margin: 10px;
}
.sns-label-wrapper {
  margin: 3px;
}
</style>
