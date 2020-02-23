'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const uvmSelect = document.querySelectorAll('.uvm--select');
  const uvmList = document.querySelectorAll('.uvm--options');

  for (const select of uvmSelect) {
    select.addEventListener('click', () => {
      select.classList.toggle('uvm--opened');
    }, true);
  }

  for (const list of uvmList) {
    list.addEventListener('click', event => {
      const { target } = event;
      const uvmSelected = target.parentNode.querySelector('.uvm--selected');

      if (uvmSelected !== null && target.tagName !== 'UL') {
        uvmSelected.classList.remove('uvm--selected');
      }

      if (target.tagName !== 'LI') {
        return;
      }
      target.classList.add('uvm--selected');
      target.parentNode.previousElementSibling.
        textContent = target.textContent;

      target.classList.add('uvm--selected');
    });
  }

  window.addEventListener('click', event => {
    const { target } = event;

    for (const select of uvmSelect) {
      if (!select.contains(target)) {
        select.classList.remove('uvm--opened');
      }
    }
  });
});
