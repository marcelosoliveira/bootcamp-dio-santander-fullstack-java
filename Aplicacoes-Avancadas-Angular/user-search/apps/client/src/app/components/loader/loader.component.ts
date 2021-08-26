import { Component } from '@angular/core';

@Component({
  selector: 'jv-loader',
  template: `
    <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <rect x="15" y="30" width="10" height="40" fill="#ffffff">
        <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.6"></animate>
      </rect>
      <rect x="35" y="30" width="10" height="40" fill="#ffffff">
        <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.4"></animate>
      </rect>
      <rect x="55" y="30" width="10" height="40" fill="#ffffff">
        <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.2"></animate>
      </rect>
      <rect x="75" y="30" width="10" height="40" fill="#ffffff">
        <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-1"></animate>
      </rect>
    </svg>
  `,
})
export class LoaderComponent {
}
