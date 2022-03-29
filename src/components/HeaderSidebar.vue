<template>
    <div>
    <q-list>
        <q-item class="q-py-lg">
        <q-img src="~assets/dc/logohero.svg" width="240px" height="40px" />
      </q-item>

        <q-list>
            <q-expansion-item no-caps flat label="School" class="text-black text-body2">
              <q-list>
                <q-item clickable to="/tech-skill-accelerator">
                <q-item-section><span class="text-weight-bold text-primary">Tech Skill Accelerator</span>
                <span>100% free and online for you<br>to accelerate your tech skill</span></q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
        </q-list>
<q-list>
            <q-expansion-item no-caps flat label="Business" class="text-black text-body2">
              <q-list>
                <q-item clickable to="/hire"><q-item-section><span class="text-weight-bold text-primary">Hire Talent</span><span>Access to tech talents pool</span></q-item-section></q-item>
                <q-item clickable to="/krenofication"><q-item-section><span class="text-weight-bold text-primary">Krenofication</span>
                <span>Build your tech with us</span></q-item-section></q-item>
              </q-list>
            </q-expansion-item>
</q-list>
<q-list>
            <q-expansion-item no-caps flat label="Blockchain" class="text-black text-body2">
              <q-list>
                <q-item clickable>
                  <q-item-section>
                      <span class="text-weight-bold text-primary">Whitepaper</span>
                      <a href="https://docs.krenovator.cc/" target="_blank">Our initial documentation<br>for blockchain</a>
                  </q-item-section></q-item>
                <q-item>
                  <q-item-section clickable>
                      <span class="text-weight-bold text-primary">Partnership</span>
                      <a href="https://forms.gle/y6978zTfcrR18vWo8" target="_blank">Lets be partners</a>
                      </q-item-section></q-item>
              </q-list>
            </q-expansion-item>
</q-list>
<q-list>
            <q-btn no-caps flat label ="Forum" class="text-black text-body2" to="/general" />
</q-list>
    </q-list>
    </div>
 </template>
