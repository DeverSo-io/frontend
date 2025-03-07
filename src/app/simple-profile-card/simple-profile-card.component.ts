import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GlobalVarsService } from "../global-vars.service";
import { Router } from "@angular/router";
import { ProfileEntryResponse } from "../backend-api.service";
import { TradeCreatorComponent } from "../trade-creator-page/trade-creator/trade-creator.component";
import { BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: "simple-profile-card",
  templateUrl: "./simple-profile-card.component.html",
})
export class SimpleProfileCardComponent implements OnInit {
  @Input() profile: ProfileEntryResponse;
  @Input() diamondLevel = -1;
  @Input() showHeartIcon = false;
  @Input() showRepostIcon = false;
  @Input() containerModalRef: any = null;
  @Input() singleColumn = false;
  @Input() hideFollowLink = false;
  @Input() isBold = true;
  @Input() inTutorial: boolean = false;
  @Input() followButtonOppositeSide: boolean = false;
  @Input() showTutorialBuy: boolean = false;
  // Whether the "buy" button should wiggle to prompt the user to click it
  @Input() tutorialWiggle = false;
  @Output() exitTutorial = new EventEmitter<any>();

  constructor(public globalVars: GlobalVarsService, private router: Router, private modalService: BsModalService) {}

  ngOnInit(): void {}

  counter(num: number) {
    return Array(num);
  }

  onClick() {
    if (this.inTutorial) {
      return;
    }
    if (this.containerModalRef !== null) {
      this.containerModalRef.hide();
    }
    if (!this.profile.Username) {
      return;
    }
    this.router.navigate(["/" + this.globalVars.RouteNames.USER_PREFIX, this.profile.Username], {
      queryParamsHandling: "merge",
    });
  }

  onBuyClicked() {
    this.globalVars.logEvent("buy : creator : select");
    this.router.navigate(
      [
        this.globalVars.RouteNames.TUTORIAL,
        this.globalVars.RouteNames.INVEST,
        this.globalVars.RouteNames.BUY_CREATOR,
        this.profile.Username,
      ],
      { queryParamsHandling: "merge" }
    );
  }

  openBuyCreatorCoinModal(event) {
    this.exitTutorial.emit();
    this.globalVars.logEvent("buy : creator : select");
    event.stopPropagation();
    const initialState = {
      username: this.profile.Username,
      tradeType: this.globalVars.RouteNames.BUY_CREATOR,
      inTutorial: this.inTutorial,
      tutorialBuy: this.showTutorialBuy,
    };
    this.modalService.show(TradeCreatorComponent, {
      class: "modal-dialog-centered buy-deso-modal buy-deso-tutorial-modal",
      initialState,
    });
  }
}
