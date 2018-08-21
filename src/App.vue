<template>
  <div>
    <!-- <mu-appbar style="width: 100%;height: 30px;">
      <mu-button flat slot="left" to='/mainpage'>
        <mu-icon value="library_books"></mu-icon> 首页
      </mu-button>
      <mu-button flat slot="left" to='/premire'>
        <mu-icon value="build"></mu-icon>
      </mu-button>
      <mu-button flat slot="left" to='/chrt'>
        <mu-icon value="dashboard"></mu-icon>
      </mu-button>
      <mu-button flat slot="left" to='/serch'>
        <mu-icon value="done_all"></mu-icon>
      </mu-button>
    </mu-appbar> -->
    <mu-container fluid>
      <mu-row gutter>
        <mu-col span="4">
          <div class="grid-cell">

            <mu-paper :z-depth="2" class="demo-list-wrap">

              <mu-appbar :z-depth='0' color='deepPurple200'>
                <mu-button icon slot="left">
                  <mu-icon value="menu"></mu-icon>
                </mu-button>
                Inbox
              </mu-appbar>

              <mu-list :toggle-nested='true'>


                <mu-list-item button :ripple="true" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''">
                  
                  <mu-list-item-action>
                    <mu-icon value="send"></mu-icon>
                  </mu-list-item-action>

                  <mu-list-item-title>Sent mail</mu-list-item-title>

                  <mu-list-item-action>
                    <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                  </mu-list-item-action>

                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-title>List Item 1</mu-list-item-title>
                  </mu-list-item>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-title>List Item 2</mu-list-item-title>
                  </mu-list-item>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-title>List Item 3</mu-list-item-title>
                  </mu-list-item>

                </mu-list-item>



                <mu-list-item button :ripple="false" nested :open="open === 'drafts'" @toggle-nested="open = arguments[0] ? 'drafts' : ''">
                  <mu-list-item-action>
                    <mu-icon value="drafts"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item-title>Drafts</mu-list-item-title>
                  <mu-list-item-action>
                    <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-title>List Item 1</mu-list-item-title>
                  </mu-list-item>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-title>List Item 2</mu-list-item-title>
                  </mu-list-item>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-title>List Item 3</mu-list-item-title>
                  </mu-list-item>
                </mu-list-item>
                <mu-list-item button :ripple="false" nested :open="open === 'inbox'" @toggle-nested="open = arguments[0] ? 'inbox' : ''">
                  <mu-list-item-action>
                    <mu-icon value="inbox"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item-title>Inbox</mu-list-item-title>
                  <mu-list-item-action>
                    <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-title>List Item 1</mu-list-item-title>
                  </mu-list-item>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-title>List Item 2</mu-list-item-title>
                  </mu-list-item>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-title>List Item 3</mu-list-item-title>
                  </mu-list-item>
                </mu-list-item>
                <mu-list-item button :ripple="false" nested :open="open === 'stared'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
                  <mu-list-item-action>
                    <mu-icon value="grade"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item-title>Stared</mu-list-item-title>
                  <mu-list-item-action>
                    <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-title>List Item 1</mu-list-item-title>
                  </mu-list-item>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-title>List Item 2</mu-list-item-title>
                  </mu-list-item>
                  <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-title>List Item 3</mu-list-item-title>
                  </mu-list-item>
                </mu-list-item>
              </mu-list>
            </mu-paper>

          </div>
        </mu-col>
        <mu-col span="8">
          <div class="grid-cell"> 右 </div>
        </mu-col>
      </mu-row>
    </mu-container>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: 'send'
    }
  }
};
</script>

<style scoped>
.grid-cell {
  background-color: cyan;
}
</style>