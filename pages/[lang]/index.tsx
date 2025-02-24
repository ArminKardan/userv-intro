
import Component, { PageEl } from '@/frontend/components/qecomps/Component'
import Window from '@/frontend/components/qecomps/Window';
import { useEffect } from 'react';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Router from 'next/router'
import Copy from '@/frontend/components/qecomps/Copy';
import FaDigits, { EnDigits } from '@/frontend/components/qecomps/FaDigits';
import TextBox from '@/frontend/components/qecomps/TextBox';


export default p => Component(p, Page);

const Page: PageEl = (props, refresh, getProps, onConnected, dies, z) => {


  return <div style={{ direction: z.lang.dir, padding: 10 }}>

    <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
      let json = await nexus.api({ "app": "hafez", cmd: "random" })
      alerter(json)
    }}>
      <f-12>فال حافظ</f-12>
    </b-200>

    <br-x />
    <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
      let json = await nexus.api({ "app": "weather", cmd: "current", body: { city: "شیراز" } })
      alerter(json)
    }}>
      <f-12>هواشناسی - الان</f-12>
    </b-200>

    <br-x />
    <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
      let json = await nexus.api({ "app": "weather", cmd: "forecast", body: { city: "شیراز" } })
      alerter(json)
    }}>
      <f-12>هواشناسی - پیش بینی</f-12>
    </b-200>

    <br-x />
    <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
      let json = await nexus.api({ "app": "phoneprice", cmd: "get" })
      alerter(json)
    }}>
      <f-12>گوشی های بازار + قیمت</f-12>
    </b-200>

    <br-x />
    <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
      let json = await nexus.api({ "app": "translator", cmd: "translate", body: { from: "en", to: "fa", text: "hi" } })
      alerter(json)
    }}>
      <f-12>ترجمه داک  داک</f-12>
    </b-200>

    <br-x />
    <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
      let phone = await prompter("شماره تماس", "شماره دریافت کننده کد تایید را وارد کنید؟", 12, true)
      if (phone == null) {
        return
      }
      let confirm = await prompter("کد تایید", "کد تایید ارسالی را وارد کنید؟", 7, true)
      if (confirm == null) {
        return
      }
      phone = EnDigits(phone)
      let json = await nexus.api({
        app: "sms", cmd: "confirm",
        body: { phone: phone, code: confirm }
      })
      alerter(json)
    }}>

      <f-12>اسمس تایید</f-12>
    </b-200>



    <br-x />
    <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
      let json = await nexus.api({ "app": "translation", cmd: "google", body: { source: null, target: "fa", text: "hi" } })
      alerter(json)
    }}>
      <f-12>ترجمه گوگل</f-12>
    </b-200>

    <br-x />
    <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
      let json = await nexus.api({ "app": "translation", cmd: "microsoft", body: { source: null, target: "fa", text: "hi" } })
      alerter(json)
    }}>
      <f-12>ترجمه مایکروسافت</f-12>
    </b-200>

    <br-x />
    <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
      let json = await nexus.api({ "app": "translation", cmd: "yandex", body: { source: null, target: "fa", text: "hi" } })
      alerter(json)
    }}>
      <f-12>ترجمه یاندکس</f-12>
    </b-200>


    <br-x />
    <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
      let json = await nexus.api({ "app": "contentidea", cmd: "get" })
      alerter(json)
    }}>
      <f-12>ایده محتوا</f-12>
    </b-200>


    <br-x />
    <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
      let json = await nexus.api({ "app": "digikala", cmd: "home" })
      alerter(json)
    }}>
      <f-12>دیجیکالا صفحه اصلی</f-12>
    </b-200>


    <br-x />
    <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
      let json = await nexus.api({ "app": "digikala", cmd: "home" })
      alerter(json)
    }}>
      <f-12>دیجیکالا سرچ</f-12>
    </b-200>

    <br-x />
    <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
      let json = await nexus.api({
        "app": "chatgpt3.5", cmd: "prompt", body: {
          prompts: [
            "assume yourself as shekspear and answer below question:",
            "what is your name and when were you born?"
          ]
        }
      })
      alerter(json)
    }}>
      <f-12>چت جی پی تی  ۳.۵</f-12>
    </b-200>


    <br-x />
    <b-200 style={{ backgroundColor: "#748EC5" }} onClick={async () => {
      let json = await nexus.api({
        "app": "chatgpt3.5", cmd: "prompt", body: {
          prompts: [
            "assume yourself as shekspear and answer below question:",
            "what is your name and when were you born?"
          ]
        }
      })
      alerter(json)
    }}>
      <f-12>چت جی پی تی</f-12> <sp-2 /><f-12 style={{ direction: "ltr" }}>4-o</f-12>
    </b-200>




  </div>
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

  (global.Startup != "OK") ? (await (await import('@/startup.ts')).Starter()) : null

  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, pageid } = session;


  let keys = ["region", "dir", "ff", "ffb", "support", "code", "textw", "txtmt"]
  let nlangs = {}
  for (let l of Object.keys(global.langs[lang])) {
    if (keys.includes(l))
      nlangs[l] = global.langs[lang][l]
  }

  let obj = await Prosper({
    props: {
      value: { v: "hiiii" },
      query: context.query,
      nlangs,
      path,
      session,
      title: "test title",
      description: "test description",
      pageid,
    },
  }, context)


  return obj

}


