<template>
  <div class="pages">
    <h2 class="title">账号升级</h2>
    <p class="sub-title">
      点击“同意升级账号”前，您需要通过勾选“我已阅读并同意”的形式在线签署《恒大统一用户中心用户服务协议》和《恒大统一用户中心隐私政策》，请您务必仔细阅读、充分理解条款内容后再进行账号升级。
    </p>

    <div class="nav-tabs">
      <div
        v-for="(item, index) in navList"
        :key="index"
        :class="{ active: selectIndex === index }"
        class="nav"
        @click="selectIndex = index"
      >
        {{ item.name }}
      </div>
    </div>
    <div v-if="selectIndex === 0" class="notice-box">
      <p class="welcome">欢迎您注册、使用恒大统一账号！</p>
      <div class="desc">
        <p>
          本协议系您与恒大集团有限公司（以下简称“恒大集团”）旗下的恒大智慧科技有限公司（以下简称“恒大智慧科技”或“我们”）就恒大统一帐号的注册和使用而订立的。
          <span class="blod">
            在使用恒大统一账号服务之前，请您务必审慎阅读并充分理解《恒大统一账号服务协议》（以下简称“本协议”），特别是限制或免除责任的相应条款、法律适用和争议解决条款。限制或免除责任的相应条款以加粗形式提示您注意。未成年人应在法定监护人的陪同下阅读。您注册登录即表示您确认对本协议全部条款含义已充分理解并完全接受。您同意，我们有权在必要的时候修改本协议条款并按法律规定公示，您可以在相关页面查阅最新版本的协议条款。
          </span>
        </p>
        <div class="content-text">
          <p class="blod">一、关于恒大统一账号</p>
          <p>
            恒大统一账号是恒大集团旗下的互联网综合账号管理工具，您只需要一个账号、一套密码、一次登录，即可轻松实现恒大集团及关联公司多平台个人账号管理与资产管理的多种需求，提供一站式便捷服务（目前，恒大集团关联公司平台包括恒房通、恒大财富、恒大智慧社区、星络家居、恒大酒店、海花岛度假区官网或移动应用软件）。
            <span class="blod">
              您在使用恒大统一账号登录恒大集团关联公司各平台前，您仍应务必仔细阅读并充分理解各平台制定的服务协议，在确认充分理解并同意后使用各平台相关产品或服务。
            </span>
          </p>
        </div>
        <div class="content-text">
          <p class="blod">二、账号使用规则</p>
          <p class="blod">（一）账号注册</p>
          <p>
            1、如果您为恒大集团关联公司平台的新用户，使用恒大集团关联公司平台前，您需要注册获取恒大统一账号。如果您在恒大统一账号服务上线前即已注册了平台账号，则需要升级该平台账号获取恒大统一账号。
          </p>
          <p>
            <span class="blod"
              >恒大统一账号一经注册，即可在接入了恒大统一账号服务的恒大集团关联公司平台通行使用。在使用恒大统一账号登录该等平台、使用该等平台提供的产品或服务时，除遵守本协议约定外，还应遵守该等平台公布的服务协议、隐私政策、用户授权协议、规则以及有关正确使用平台服务的说明和操作指引。恒大统一账号和接入恒大统一账号服务的平台对出现的纠纷在法律规定和约定的范围内各自承担责任。</span
            >为保障恒大统一账号的正常运行，您在注册恒大统一账号服务时需要提供一些必要的信息。您须保证所提供的注册信息真实、准确、完整，否则，您将无法使用恒大统一账号服务或在使用过程中受到限制。<span
              class="blod"
              >对于因您提供的信息不真实、不准确或不完整导致的损失由您承担。</span
            >
          </p>
          <p>
            2、我们有权根据您所提供注册信息的真实性、准确性、完整性以及是否符合法律法规规定及恒大统一账号规定的其它条件，决定您的注册成功与否。如您提供的注册信息存在虚假信息或冒用他人信息等情况，恒大智慧科技作为本协议服务的提供方有权停止该账号的继续使用。
          </p>
          <p>
            3、您在使用恒大统一账号的过程中，所提供的注册信息发生变动，应及时进行变更。
          </p>
          <p>
            4、您自愿注册并使用恒大统一账号，确认以恒大统一账号的技术操作方式管理您的恒大集团关联公司平台。
          </p>
          <p>
            5、未成年人在注册使用恒大统一账号的服务前，应事先取得监护人的同意。监护人的同意包括但不限于口头的、书面的或者其它形式。
            <span class="blod">
              监护人应承担未成年人在网站隐私保护的首要责任，且未成年人及其监护人应承担使用本服务而导致的一切后果。
            </span>
          </p>
          <p class="blod">
            6、恒大统一账号为恒大集团关联公司平台用户提供服务，为用户体验及功能服务考虑，您在不同平台入口注册恒大统一账号时，被要求填写的信息可能不完全一致，因此，在您使用更高级的服务时，为了给您提供更好的服务及为了您的账号安全，可能需要您补全完整的信息后方可使用享受服务。若您未补充完整信息可能导致该部分信息对应的服务使用受限。
          </p>
          <p>
            7、我们与用户一同致力于个人信息的保护，保护用户个人信息是恒大智慧科技的一项基本原则。关于我们如何收集、使用、储存和分享您的个人信息，请仔细阅读和充分理解
            <span class="blod">
              《恒大统一账号隐私政策》。
            </span>
          </p>
          <p class="blod">（二）账号安全</p>
          <p>
            1、恒大统一账号密码由您自行设定。您应妥善保管您的恒大统一账号与密码，并对使用此恒大统一账号实施的所有活动及其后果承担责任。
          </p>
          <p>
            2、您须采取必要措施保护您的号码安全，包括但不限于妥善保管恒大统一账号与密码、安装防病毒木马软件、定期更改密码等措施。
          </p>
          <p>
            3、除前述各条款约定外，用户还须妥善保管与恒大统一账号及其密码相关的任何数字证书、手机动态口令或验证码、账户绑定的手机号码等一切信息和设备。<span
              class="blod"
              >如用户更换、暂停或终止使用上述信息或设备，或遗失或泄露前述信息或设备的，用户应及时采取必要措施，以减少可能发生的损失。您知晓并同意，因上述原因所致损失需由您本人承担。</span
            >
          </p>
          <p class="blod">（三）账号注销</p>
          <p>您可通过如下方式注销恒大统一账号：</p>
          <p>
            如您需要注销恒大统一账号，您可以通过本协议第七条我们预留的电子邮箱联系我们的工作人员进行处理。我们在此善意地提醒您，
            <span class="blod">
              如您注销恒大统一账号，您将同时无法再通过此账号登录、使用已接入恒大统一账号的恒大集团关联公司平台，也将无法找回您在以上平台中的任何内容或信息。您在注销恒大统一账号前，请您确认已妥善处理了您登录使用过的恒大集团关联公司平台下的所有问题（包括资产、账户和交易状态等）。您一旦注销恒大统一账号，您在上述平台下的优惠券、积分、资格、订单等视为您自行放弃，将无法继续使用。您理解并同意，我们无法协助您重新恢复前述服务。注销恒大统一账号并不代表该恒大统一账号注销前的账户行为和相关责任得到豁免或减轻。
            </span>
          </p>
          <p>
            注销恒大统一账号后，您该账号内的所有信息将被清空，我们将不会再收集、使用或共享与该账户相关的个人信息，但之前的信息如有法律法规要求，我们将按要求进行保存，且在该依法保存的时间内有权机关仍有权依法查询。
          </p>
        </div>
        <div class="content-text">
          <p class="blod">三、用户行为规范</p>
          <p class="blod">
            （一）用户在使用恒大统一账号过程中应遵守法律法规之规定，以及本协议及其他单独协议之约定。除此之外，您还应禁止从事以下行为：
          </p>
          <p>
            1、恶意登录、注册，恶意使用系统功能及服务。干扰或破坏恒大统一账号服务或恒大统一账号相关联的服务器和网络，或不遵守恒大统一账号服务的规定；
          </p>
          <p>
            2、恶意诋毁或损害恒大统一账号声誉、利用恒大统一账号用户身份从事违反国家法律法规的活动等行为；
          </p>
          <p>
            3、发布、传送、传播、存储危害国家安全统一、破坏社会稳定、违反公序良俗、侮辱、诽谤、淫秽、暴力以及任何违反国家法律法规的内容；
          </p>
          <p>
            4、发布、传送、传播、存储侵害他人知识产权、商业秘密等合法权利的内容；
          </p>
          <p>5、恶意虚构事实、隐瞒真相以误导、欺骗他人；</p>
          <p>6、发布、传送、传播广告信息及垃圾信息；</p>
          <p>
            7、将有关干扰、破坏或限制任何计算机软件、硬件或通讯设备功能的软件病毒或其它计算机代码、档案和程序等资料，加以上传、张贴、发送电子邮件或以其它方式传送；
          </p>
          <p>
            8、违反任何相关的中国法律、行政法规、规章、条例等具有法律效力的规范。
          </p>
          <p>
            （二）如果我们发现或收到他人举报您发布的信息违反本条约定，我们有权进行独立判断并采取技术手段予以删除、屏蔽或断开链接。同时，我们有权视用户的行为性质，采取包括但不限于暂停或终止服务，限制、冻结或终止账号使用等措施并追究法律责任。
          </p>
        </div>
        <div class="content-text">
          <p class="blod">四、免责条款</p>
          <p class="blod">
            您理解并同意，我们在以下情况下不承担责任（包括但不限于）：
          </p>
          <p class="blod">
            （一）我们不对恒大统一账号服务提供任何形式的保证，包括但不限于本服务符合您的需求，本服务不受干扰、及时提供或免于出错。
          </p>
          <p class="blod">
            （二）我们的合作单位所提供的服务内容及品质由该合作单位自行负责。
          </p>
          <p class="blod">
            （三）我们不保证为向会员提供便利而设置的外部链接的准确性和完整性，同时对于该等外部链接指向的不由我们实际控制的任何网页上的内容，我们不承担任何责任。
          </p>
          <p class="blod">
            （四）对于本协议第三条造成的服务变更、中断或终止，我们不承担责任。
          </p>
          <p class="blod">
            （五）因以下情况没有正确执行您提交的恒大统一账号用户操作指令而造成损失的，我们不承担任何责任：
          </p>
          <p class="blod">1、指令信息不明、存在乱码或不完整等；</p>
          <p class="blod">2、您所拥有的产品或服务发生失效、终止等情况；</p>
          <p class="blod">3、其他恒大统一账号无过失的情况。</p>
          <p class="blod">
            （六）对于受到计算机病毒、木马或其他恶意程序、黑客攻击所造成的损失。
          </p>
          <p class="blod">
            （七）您须安全使用账号，妥善保存恒大统一账号和密码，对您保管不善造成的损失，我们不承担责任。
          </p>
          <p class="blod">
            （八）如果您在共享环境下或在电脑被远程监控的情况下登录恒大统一账号，由此造成的损失，我们不承担责任。
          </p>
          <p class="blod">
            （九）恒大统一账号不允许您使用他人身份信息注册，否则，因此产生的法律责任将由您本人承担，给他人造成损失的，您应给予赔偿。
          </p>
          <p class="blod">
            （十）如您使用他人账号，须事先获得他人同意。一旦输入正确的账号和密码，我们即视您为已获得他人同意。您与他人之间因此产生的任何纠纷与恒大统一账号无关，对您或他人的损失，我们不承担责任，并且如给我们造成损失，我们将保留追索的权利。
          </p>
          <p class="blod">
            （十一）如您将您的账号出借给他人使用，一旦他人输入正确的账号和密码，我们即视他人已获得您的同意。您与他人之间因此产生的任何纠纷与恒大统一账号无关，对您或他人的损失，我们不承担责任，并且如给我们造成损失，我们将保留向您追索的权利。
          </p>
          <p class="blod">
            （十二）如果您将账号详细信息输入其他任何服务系统而不是输入恒大统一账号相关网页安全登录系统，由此造成的损失，我们不承担责任。
          </p>
          <p class="blod">
            （十三）您通过移动通讯设备登录相关网站和使用相关服务，因使用移动通讯设备过程中出现的信息的不完整、丢失或被第三方拦截等不可归责于恒大统一账号的情形，我们不承担责任。
          </p>
          <p class="blod">
            （十四）因无法预见、无法避免且无法克服的不可抗力事件，导致恒大统一账号在本协议项下的义务无法履行或无法按时履行，我们将在法律允许的范围内免责。
          </p>
          <p class="blod">
            （十五）如果恒大统一账号存在投入使用时的科学技术水平尚不能发现的缺陷，由此造成的损失，我们不承担责任。
          </p>
        </div>
        <div class="content-text">
          <p class="blod">五、服务的变更、中断或终止</p>
          <p>
            <span class="blod"
              >您理解，恒大统一账号需要定期或不定期对提供服务的系统或相关设备进行检修或者维护，或对恒大统一账号的系统进行升级、改造。如因此类情况而造成服务在合理时间内的中断，我们无需为此承担任何责任。</span
            >但我们将尽可能事先进行通告并根据情况在相应服务页面提前作出通知。
          </p>
          <p class="blod">
            （一）如发生下列任何一种情形，我们有权不经通知而中断或终止向您提供本协议项下的服务而无需对您或任何第三方承担任何责任：
          </p>
          <p class="blod">
            1、根据法律法规规定您应提交真实信息，而您提供的个人信息不真实、或与注册时的信息不一致又未能提供合理证明；
          </p>
          <p class="blod">2、您违反相关法律法规或本协议的约定；</p>
          <p class="blod">3、按照法律法规或主管部门的要求；</p>
          <p class="blod">4、出于安全的原因或其它必要的情形。</p>
          <p>
            （二）您有责任自行备份存储在本服务中的数据。如果您的服务被终止，我们可以从服务器上永久地删除您的数据，但法律法规另有规定的除外。服务终止后我们没有义务向您返还数据。
          </p>
        </div>
        <div class="content-text">
          <p class="blod">六、法律适用及管辖</p>
          <p>
            本协议之订立、生效、解释、修订、补充、终止、执行与争议解决均适用中国大陆法律(不含冲突法)；如法律无相关规定的，参照商业惯例或行业惯例。
          </p>
          <p>
            为执行本协议或与本协议有关的一切争议，均应首先由该争议所涉协议主体协商解决；协商不成的，任何一方均有权就相关争议向被告所在地人民法院提起诉讼。
          </p>
        </div>
        <div class="content-text">
          <p class="blod">七、如何联系我们</p>
          <p>
            如您对本协议的相关内容，恒大统一账号相关服务有任何问题、意见或建议，可通过以下方式联系我们：
          </p>
          <p class="no-indent" style="text-align: left;">
            1、发送电子邮件到我们的邮箱：zhkj_service@evergrande.com
          </p>
          <p class="no-indent">2、以书面形式寄送至以下地址：</p>
          <p class="no-indent">恒大智慧科技有限公司</p>
          <p class="no-indent">
            广东省深圳市南山区海德三道航天科技广场A座30层/31层
          </p>
        </div>
        <footer>
          <p class="blod no-indent">本版更新时间：2020.04.21</p>
          <p class="blod no-indent">本版生效时间：2020.01.17</p>
        </footer>
      </div>
    </div>
    <div v-else class="notice-box">
      <div class="desc">
        您的信任对我们非常重要，我们深知个人信息对您的重要性，我们将按法律法规要求，采取相应安全保护措施，尽力保护您的个人信息安全可控。鉴于此，恒大统一账号服务提供者恒大智慧科技有限公司（以下简称“我们”）制定本隐私政策。
        <p class="blod">
          在您注册、登录恒大统一账号以及使用恒大统一账号登录恒大集团关联公司各平台前（目前，恒大集团关联公司平台包括恒房通、恒大财富、恒大智慧社区、星络家居、恒大酒店、海花岛度假区官网或移动应用软件），请您务必仔细阅读并充分理解本政策及恒大集团关联公司各平台制定的政策，在确认充分理解并同意后使用相关产品或服务。我们提供服务时，可能会收集、储存和使用与您有关的个人信息。如果您不提供相关信息，可能无法注册成为我们的用户或无法享受我们提供的某些服务，或者无法达到相关服务拟达到的效果。
        </p>
        <div class="blod">
          <p class="mt20">目录</p>
          <p>一、我们如何收集个人信息</p>
          <p>二、我们如何使用个人信息</p>
          <p>三、我们如何对外提供个人信息</p>
          <p>四、我们如何存储和保护您的个人信息</p>
          <p>五、您如何管理您的个人信息</p>
          <p>六、责任声明</p>
          <p>七、未成年人的个人信息保护</p>
          <p>八、本隐私权政策如何更新</p>
          <p>九、如何联系我们</p>
          <p>十、法律适用及管辖</p>
        </div>
        <div class="art mt20">
          <h4>一、我们如何收集个人信息</h4>
          <p>
            1、在您注册或使用恒大统一账号时，您需要提供您本人的
            <span class="bold">
              手机号码
            </span>
            作为账户登录名，我们将通过发送短信验证码的方式来验证您的身份是否有效。如您不提供前述信息，可能无法注册恒大统一账号或者无法使用恒大统一账号服务。
          </p>
          <p>
            2、为了向您提供仅需一个账号、一套密码、一次登录，即可轻松实现恒大集团关联公司多平台个人账号管理与资产管理的一站式便捷服务，
            <span class="bold">
              当您通过恒大统一账号登陆使用恒大集团关联公司平台时，我们会获得您在上述平台提交的您的个人信息（包括昵称、头像、登录手机号、密码、真实姓名、身份证号码、其他证件类型及证件号码、性别、国籍（地区）、生日、职业、银行卡号、开户行、银行预留手机号、常住地、家庭地址/家乡、邮寄地址、微信号、支付宝账号、QQ号、电子邮箱、身份类型）。
            </span>
            如您拒绝提供上述信息或拒绝授权，可能无法达到恒大统一账号服务拟达到的效果。
          </p>
          <p>
            3、当您登录、使用恒大统一账号时，为保障您正常使用我们的服务，维护我们服务的正常运行，改进及优化我们的服务体验、使我们的服务更加贴切用户的需求以及识别账号的异常状态、保障您的账号安全，
            <span class="bold">
              我们会收集、汇总、记录的信息，包括日志信息、操作系统、设备型号、系统版本、设备厂商以及手机常用属性信息，
            </span>
            这类信息是为提供服务必须收集的基础信息。如您不同意我们记录前述信息，可能无法注册恒大统一账号或者无法使用恒大统一账号服务。
          </p>
          <p>
            4、当您使用实名认证服务时，我们需要您提供您的
            <span class="bold">
              姓名、证件类型、证件号码、银行卡号/账号、刷脸认证
            </span>
            等信息，并可能通过验证
            <span class="bold">
              账号/卡密码
            </span>
            等方式对有关信息进行有效性核验。如您不提供上述信息，我们将无法向您提供需完成实名认证后方可使用的产品或服务。
          </p>
        </div>
        <div class="art">
          <h4>二、我们如何使用个人信息</h4>
          <p>1、实现本隐私政策中“我们如何收集个人信息”所述目的。</p>
          <p>
            2、为了保障服务的稳定性和安全性，我们会将您的个人信息用于身份验证、安全防范、诈骗检测、预防或禁止非法活动、降低风险、存档和备份用途。
          </p>
          <p>3、根据法律法规或监管要求向相关部门进行报告。</p>
          <p>
            4、我们会采取脱敏、去标识化等方式对您的个人信息进行综合统计、分析加工，以便为您提供更加准确、个性、流畅及便捷的服务，或帮助我们评估、改善或设计服务及运营活动。
          </p>
          <p>
            5、为便于您查看并管理您的个人信息，您同意我们将您的个人信息同步到恒大统一用户信息页面（您可在恒大集团关联公司平台的个人信息页面点击“恒大统一用户信息”跳转至该页面）。
          </p>
          <p>
            6、当我们要将信息用于本隐私政策未载明的其他用途时，会按照法律法规及国家标准的要求以确认协议、具体场景下的文案确认动作等形式再次征得您的同意。
          </p>
          <p>征得授权同意的例外</p>
          <p>
            根据相关法律法规规定，以下情形中收集您的信息无需征得您的授权同意：
          </p>
          <p>（1）与国家安全、国防安全直接相关的；</p>
          <p>（2）与公共安全、公共卫生、重大公共利益直接相关的；</p>
          <p>（3）与犯罪侦查、起诉、审判和判决执行等直接相关的；</p>
          <p>
            （4）出于维护信息主体或其他个人的生命、财产等重大合法权益但又很难得到您本人同意的；
          </p>
          <p>（5）所收集的个人信息是您自行向社会公众公开的；</p>
          <p>
            （6）从合法公开披露的信息中收集信息的，如合法的新闻报道、政府信息公开等渠道；
          </p>
          <p>（7）根据您的要求签订和履行合同所必需的；</p>
          <p>
            （8）用于维护恒大统一账号服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障；
          </p>
          <p>（9）法律法规规定的其他情形。</p>
        </div>
        <div class="art">
          <h4>三、我们如何对外提供个人信息</h4>
          <p class="bold">（一）共享</p>
          <p>
            1、我们承诺对您的信息进行严格保密，我们不会与恒大集团及其关联公司以外的第三方公司、组织和个人共享您的个人信息，除非存在以下一种或多种情形：
          </p>
          <p>（1）您自行提出要求的；</p>
          <p>（2）事先已征得您的明确授权同意；</p>
          <p>
            （3）根据适用的法律法规、法律程序的要求、强制性的行政或司法要求所必须的情况下进行提供；
          </p>
          <p>
            （4）在法律法规允许的范围内，为维护我们、我们的关联公司、您或社会公众利益、财产或安全免遭损害而有必要提供；
          </p>
          <p>
            （5）只有共享您的个人信息，才能实现我们的产品与/或服务的功能或提供您需要的服务；
          </p>
          <p>（6）应您需求为您处理您与他人的纠纷或争议；</p>
          <p>
            （7）符合与您签署的相关协议（包括在线签署的电子协议以及相应的平台规则）或其他的法律文件约定所提供；
          </p>
          <p>（8）基于学术研究而使用；</p>
          <p>（9）基于符合法律法规的社会公共利益而使用。</p>
          <p>
            2、为便于我们基于恒大统一账号体系向您提供一站式服务以及便于您进行统一管理、保障系统和账号安全等，您授权同意我们将您的个人信息与您通过恒大统一账号登录使用的恒大集团关联公司平台在合理范围内进行共享。
          </p>
          <p>
            3、当您投诉他人或被他人投诉时，为了保护您及他人的合法权益，我们可能会将您的姓名及有效证件号码、联系方式、投诉相关内容提供给消费者权益保护部门及监管机关，以便及时解决投诉纠纷，但法律法规明确禁止提供的除外。
          </p>
          <p class="bold">（二）转让</p>
          <p>
            转让是指将个人信息控制权向其他公司、组织或个人转移的过程。原则上我们不会将您的个人信息转让,但以下情况除外:
          </p>
          <p>1、您自行提出要求的；</p>
          <p>2、事先已征得您的明确授权同意；</p>
          <p>
            3、如我们进行兼并、收购、重组、分立、破产、资产转让或类似的交易，而您的个人信息有可能作为此类交易的一部分而被转移，我们会要求新持有人继续遵守和履行该隐私政策的全部内容（包括使用目的、使用规则、安全保护措施等），否则我们将要求其重新获取您的明示授权同意；
          </p>
          <p>4、法律法规等规定的其他情形。</p>
          <p class="bold">
            如具备上述事由确需转让的，我们会在转让前向您告知转让的信息的目的、类型（如涉及您的个人敏感信息的，我们还会向您告知涉及的敏感信息的内容），并在征得您的授权同意后再转让，但法律法规另有规定的或本政策另有约定的除外。
          </p>
          <p class="bold">（三）公开披露</p>
          <p>我们仅会在以下情形，公开披露您的个人信息：</p>
          <p>
            1、在您明确同意或主动选择情况下，我们可能会公开披露您所指定的个人信息；
          </p>
          <p>
            2、根据法律、法规的要求、强制性的行政执法或司法要求所必须提供您个人信息的情况下，我们可能会依据所要求公开披露您的个人信息。在符合法律法规的前提下，当我们收到上述披露信息的请求时，我们会要求必须出具与之相应的法律文件，如传票或调查函。
          </p>
          <h4>（四）例外情形</h4>
          <p>
            根据法律法规等规定，
            <sapn class="bold"
              >在下述情况下，共享、转让、公开披露您的个人信息无需事先征得您的授权同意：
            </sapn>
          </p>
          <p>1、与国家安全、国防安全直接相关的；</p>
          <p>2、与公共安全、公共卫生、重大公共利益直接相关的；</p>
          <p>
            3、与犯罪侦查、起诉、审判和判决执行等直接相关的；或根据法律法规的要求、行政机关或公检法等有权机关的要求的；
          </p>
          <p>
            4、出于维护您或其他个人的生命、财产等重大合法权益但又很难得到您本人同意的；
          </p>
          <p>
            5、个人信息是您自行向社会公开的或者是从合法公开的渠道（如合法的新闻报道、政府信息公开等渠道）中收集到的；
          </p>
          <p>6、根据与您签订和履行相关协议或其他书面文件所必需的；</p>
          <p>7、法律法规等规定的其他情形。</p>
        </div>
        <div class="art">
          <h4>四、我们如何存储和保护您的个人信息</h4>
          <p class="bold">（一）个人信息的存储</p>
          <p>
            我们在中华人民共和国境内收集和产生的个人信息将存储在中华人民共和国境内。若为处理跨境业务且经您授权，向境外机构传输境内收集的相关个人信息的，我们会按照法律、行政法规和相关监管部门的规定执行，并通过签订协议、核查等有效措施，要求境外机构为所获得的个人信息保密。我们仅在本政策所述目的所必需期间和法律法规要求的时限内保留您的个人信息。
          </p>
          <p class="bold">（二）个人信息的保护措施</p>
          <p>
            1、为保障您的信息安全，我们致力于使用各种安全技术及配套的管理体系来防止您的信息被泄露、毁损或者丢失，如通过网络安全层软件（SSL）进行加密传输、信息加密存储、严格限制数据中心的访问、使用专用网络通道及网络代理。我们会建立个人信息安全影响评估制度，定期开展个人信息安全影响评估。我们将定期对隐私政策和相关规程，以及安全措施的有效性进行审计。同时我们会严格限制访问信息的人员范围，对可能接触到您的信息的工作人员采取最小化授权原则；不断对工作人员培训相关法律法规及隐私安全准则和安全意识强化宣导。
          </p>
          <p>
            2、尽管我们已经采取了必要措施保护您的个人信息，但鉴于网络安全技术的局限性、相对性以及计算机病毒、网络入侵和攻击破坏（包括但不限于DDOS）等危害网络安全事项或行为的不可预见性，<span
              class="bold"
              >您理解并同意：不论在何种情况下，我们均不对我们不能预测或控制的行为（如信息网络正常的设备维护，信息网络连接故障，电脑、通讯或其他系统的故障，电力故障，罢工，劳动争议，暴乱，起义，骚乱，生产力或生产资料不足，火灾，洪水，风暴，爆炸，战争，政府行为，司法行政机关的命令，第三方原因等）造成的不能服务或延迟服务承担责任，但我们将尽力减少因此而给您造成的损失和影响。</span
            >
          </p>
        </div>
        <div class="art">
          <h4>五、您如何管理您的个人信息</h4>
          <p>（一）查询、修改或补充您的信息</p>
          <p>
            您可在统一用户中心个人信息页面中，查阅您的身份信息、账户信息，或修改、补充您的个人资料，或进行相关的隐私、安全设置；但出于安全性和身份识别的考虑或根据法律法规的强制规定，您可能无法修改注册时提供的初始注册信息。
          </p>
          <p>（二）删除您的个人信息</p>
          <p>在以下情形中，您可以向我们提出删除个人信息的请求：</p>
          <p>1、如果我们处理个人信息的行为违反法律法规；</p>
          <p>2、如果我们收集、使用您个人信息，却未征得您的同意；</p>
          <p>3、如果我们处理个人信息的行为违反了与您的约定；</p>
          <p>4、如果您不再使用我们的产品或服务，或您注销了账号；</p>
          <p>5、如果我们不再为您提供产品或服务。</p>
          <p>
            若我们决定响应您的删除请求，我们还将同时通知从我们获得您的个人信息的实体，要求其及时删除，除非法律法规另有规定，或这些实体获得您的独立授权。
          </p>
          <p>
            当您从我们的服务中删除信息后，我们可能不会立即在备份系统中删除响应的信息，但会在备份更新时删除这些信息。
          </p>
          <p>（三）撤回同意</p>
          <p>
            您可以通过本协议第九条我们预留的电子邮箱联系我们的工作人员提出撤回同意申请，我们收到申请并审核确认后会按照您的申请内容停止收集、处理您的个人信息。但您撤回同意的决定，不会影响此前基于您的授权而展开的个人信息处理。
          </p>
          <p>（四）注销您的恒大统一账号</p>
          <p>
            如您需要注销恒大统一账号，您可以通过本协议第九条我们预留的电子邮箱联系我们的工作人员进行处理。我们在此善意地提醒您，<span
              class="bold"
              >如您注销恒大统一账号，您将同时无法再通过此账号登录、使用已接入恒大统一账号的恒大集团关联公司平台，也将无法找回您在以上平台中的任何内容或信息。您在注销恒大统一账号前，请您确认已妥善处理了您登录使用过的恒大集团关联公司平台下的所有问题（包括资产、账户和交易状态等）。您一旦注销恒大统一账号，您在上述平台下的优惠券、积分、资格、订单等视为您自行放弃，将无法继续使用。您理解并同意，我们无法协助您重新恢复前述服务。</span
            >注销恒大统一账号并不代表该恒大统一账号注销前的账户行为和相关责任得到豁免或减轻。
          </p>
          <p>
            注销恒大统一账号后，您该账号内的所有信息将被清空，我们将不会再收集、使用或共享与该账户相关的个人信息，但之前的信息如有法律法规要求，我们将按要求进行保存，且在该依法保存的时间内有权机关仍有权依法查询。
          </p>
          <p>
            （五）为保障安全，您可能需要提供书面请求，或以其他方式证明您的身份。我们可能会先要求您验证自己的身份，然后再处理您的请求。
          </p>
          <p>我们将在十五天内作出答复。</p>
          <p>
            对于您的合理请求，我们原则上不收取费用，但对多次重复、超出合理限度的请求，我们将酌情收取一定费用。对于那些无端重复、需要过多技术手段（例如，需要开发新系统或从根本上改变现行惯例）、给他人合法权益带来风险或者不切实际的请求，我们可能会予以拒绝。
          </p>
          <p>在以下情形下，我们可能无法响应您的请求：</p>
          <p>(1)与国家安全、国防安全有关的；</p>
          <p>(2)与公共安全、公共卫生、重大公共利益有关的；</p>
          <p>(3)与犯罪侦查、起诉和审判等有关的；</p>
          <p>(4)有充分证据表明您存在主观恶意或滥用权利的；</p>
          <p>(5)响应您的请求将导致其他个人、组织的合法权益受到严重损害的。</p>
          <p>(6)涉及商业秘密的。</p>
        </div>
        <div class="art">
          <h4>六、责任声明</h4>
          <p class="bold">
            请您注意，您访问的从恒大统一账号处接收您的个人信息的恒大集团关联公司平台可能有自己的隐私权保护政策；当您查看上述平台创建的网页或使用其开发的应用程序时，上述平台可能会放置他们自己的Cookie或网络Beacon，这些Cookie或网络Beacon不受我们的控制，且他们的使用不受本隐私政策的约束。我们会努力去要求这些主体对您的个人信息采取保护措施，同时您应务必仔细阅读并充分理解、同意恒大集团关联公司各平台制定的政策后再使用相关产品或服务。
          </p>
        </div>
        <div class="art">
          <h4>七、未成年人的个人信息保护</h4>
          <p>
            1、我们非常重视对未成年人个人信息的保护。若您是18周岁以下的未成年人，在使用我们及恒大集团关联公司平台产品与/或服务前，应事先取得您监护人的同意。我们将根据国家相关法律法规的规定保护未成年人的个人信息。
          </p>
          <p>
            2、我们不会主动直接向未成年人收集其个人信息。对于经监护人同意而收集未成年人个人信息的情况，我们只会在受到法律允许、监护人同意或者保护未成年人所必要的情况下使用、共享、转让或披露此信息。
          </p>
          <p>
            3、如果有事实证明未成年人并未取得监护人同意的情况下注册使用了我们及恒大集团关联公司平台产品与/或服务，我们会与相关监护人协商，并设法尽快删除相关个人信息。
          </p>
          <p>
            4、对于可能涉及的不满14周岁的儿童个人信息，我们进一步采取以下措施予以保障：
          </p>
          <p>
            （1）对于收集到的儿童个人信息，我们除遵守本隐私政策关于用户个人信息的约定外，还会秉持正当必要、知情同意、目的明确、安全保障、依法利用的原则，严格遵循《儿童个人信息网络保护规定》等法律法规的要求进行存储、使用、披露，且不会超过实现收集、使用目的所必须的期限，到期后我们会对儿童个人信息进行删除或匿名化处理。我们会指定专人负责儿童个人信息保护事宜，我们还会制定儿童个人信息保护的内部专门制度。
          </p>
          <p>
            （2）儿童或其监护人有权随时访问和更正儿童个人信息，还可以向我们提出更正和删除的请求。如您对儿童个人信息相关事宜有任何意见、建议或投诉、举报，请通过第九节中的联系方式与我们联系，我们会随时为您提供帮助。
          </p>
        </div>
        <div class="art">
          <h4>八、本隐私权政策如何更新</h4>
          <p>
            基于业务功能、使用规则、联络方式或法律法规及监管要求，我们可能会适时对本政策进行修订，该等修改构成本隐私政策的一部分。对于重大变更，我们会提供更显著的通知，您可以选择停止使用恒大统一账号服务；若您点击确认经修订的隐私政策即表示同意受经修订的本隐私政策的约束。
          </p>
        </div>
        <div class="art">
          <h4>九、如何联系我们</h4>
          <p>
            如您有关于网络信息安全的投诉和举报，或您对隐私政策、您的信息的相关事宜有任何问题、意见或建议，可通过以下方式联系我们：
          </p>
          <p>1、发送电子邮件到我们的邮箱:</p>
          <p>zhkj_service@evergrande.com</p>
          <p>2、以书面形式寄送至以下地址：</p>
          <p>恒大智慧科技有限公司</p>
          <p>广东省深圳市南山区海德三道航天科技广场A座30层/31层</p>
        </div>
        <div class="art">
          <h4>十、法律适用与管辖</h4>
          <p>
            本隐私政策之订立、生效、解释、修订、补充、终止、执行与争议解决均适用中国大陆法律(不含冲突法)；如法律无相关规定的，参照商业惯例或行业惯例。
          </p>
          <p>
            为执行本隐私政策或与本隐私政策有关的一切争议，均应首先由该争议所涉协议主体协商解决；协商不成的，任何一方均有权就相关争议向被告所在地人民法院提起诉讼。
          </p>
        </div>
        <p><span class="blod">本版更新时间：</span>2020.04.21</p>
        <p><span class="blod">本版生效时间：</span>2020.01.17</p>
      </div>
    </div>

    <div class="btn-box">
      <div class="note">
        <el-checkbox v-model="agree">
          我已阅读并同意
          <span class="link">《恒大统一用户中心用户服务协议》</span>
          和
          <span class="link">《恒大统一用户中心隐私政策》</span>
        </el-checkbox>
      </div>
      <el-button class="submit-btn" type="danger">
        确定
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectIndex: 0,
      navList: [
        { name: '恒大统一用户中心用户服务协议' },
        { name: '恒大统一用户中心隐私政策' }
      ],
      agree: false
    }
  },
  methods: {
    selectUser(index) {
      this.selectIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/global.less';

.pages {
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  font-size: 16px;
  line-height: 22px;
  color: rgba(68, 68, 79, 1);

  .title {
    margin-bottom: 28px;
    font-size: 28px;
    font-weight: bold;
    color: rgba(230, 46, 55, 1);
    line-height: 32px;
  }

  .sub-title {
    margin-bottom: 45px;
  }

  .nav-tabs {
    height: 46px;
    margin-bottom: 30px;
    border-bottom: solid 1px #ebebec;
    font-size: 20px;
    font-weight: bold;
    line-height: 28px;
  }

  .nav {
    position: relative;
    height: 46px;
    &:extend(.fl);
    margin-right: 52px;
    color: rgba(169, 168, 174, 1);
    cursor: pointer;

    &:hover {
      color: rgba(131, 130, 136, 1);
    }

    &.active {
      color: rgba(68, 68, 79, 1);

      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
        height: 5px;
        background-color: rgba(230, 46, 55, 1);
      }
    }
  }

  .notice-box {
    .blod {
      font-weight: bold;
    }

    .content-text,
    .art,
    footer,
    .mt20 {
      margin-top: 20px;
    }
  }

  .btn-box {
    margin-top: 30px;

    .note {
      margin-bottom: 16px;
      text-align: center;
    }

    .link {
      color: rgba(230, 46, 55, 1);
    }

    .submit-btn {
      display: block;
      width: 390px;
      height: 64px;
      margin: 0 auto;
      box-shadow: 0px 9px 12px -4px rgba(255, 210, 212, 1);
      border-radius: 6px;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
