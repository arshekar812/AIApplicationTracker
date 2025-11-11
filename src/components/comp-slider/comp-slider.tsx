import { registerCustomElement, ObservedGlobalProps } from "ojs/ojvcomponent";
import "ojs/ojconveyorbelt";
import "ojs/ojactioncard";
import "ojs/ojavatar";
import "ojs/ojbutton";
import "css!./comp-slider-styles.css";

type CardAction = {
  label: string;
  type: string;
  postback: { action: string; variables: Record<string, any> };
};

type CardItem = {
  title: string;
  description: string;
  imageUrl: string;
  actions: CardAction[];
};

type Props = {
  cards?: CardItem[];
} & ObservedGlobalProps<never>;

/**
 * @ojmetadata version "1.0.0"
 * @ojmetadata displayName "Comp Slider"
 * @ojmetadata description "Cards slider"
 */
function CompSliderImpl(props: Props) {
  let cards = props.cards ?? [];
   cards = [
            {
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9WkVt-bz07jUnsaFipxR5Ua47VpXSJ48riPJ0o05PDHGI7bywah5GWqX5JhAbblnVZA&usqp=CAU",
                "description": "Contest Number: 2000005X \nJob Family: Teacher",
                "title": "SUB, TEACHER",
                "actions": [
                    {
                        "postback": {
                            "variables": {
                                "jobStatus": "Hired - External",
                                "jobStep": "Hire",
                                "jobCode": "2000005X",
                                "briefstatus": "Welcome to the CCSD team!",
                                "detailedstatus": "Welcome to the CCSD team! Be sure to reach out to your new location for your reporting time."
                            },
                            "action": "showStatus",
                        },
                        "label": "Show Status",
                        "type": "postback"
                    }
                ]
            },
            {
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9WkVt-bz07jUnsaFipxR5Ua47VpXSJ48riPJ0o05PDHGI7bywah5GWqX5JhAbblnVZA&usqp=CAU",
                "description": "Contest Number: 200002MV \nJob Family: Teacher",
                "title": "SUB, TEACHER ",
                "actions": [
                    {
                        "postback": {
                            "variables": {
                                "jobStatus": "Hired - External",
                                "jobStep": "Hire",
                                "jobCode": "200002MV",
                                "briefstatus": "Welcome to the CCSD team!",
                                "detailedstatus": "Welcome to the CCSD team! Be sure to reach out to your new location for your reporting time."
                            },
                            
                            "action": "showStatus",
                          
                        },
                        "label": "Show Status",
                        "type": "postback"
                    }
                ]
            },
            {
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9WkVt-bz07jUnsaFipxR5Ua47VpXSJ48riPJ0o05PDHGI7bywah5GWqX5JhAbblnVZA&usqp=CAU",
                "description": "Contest Number: 200002MV \nJob Family: Teacher",
                "title": "SUB, TEACHER ",
                "actions": [
                    {
                        "postback": {
                            "variables": {
                                "jobStatus": "Hired - External",
                                "jobStep": "Hire",
                                "jobCode": "200002MV",
                                "briefstatus": "Welcome to the CCSD team!",
                                "detailedstatus": "Welcome to the CCSD team! Be sure to reach out to your new location for your reporting time."
                            },
                            
                            "action": "showStatus",
                          
                        },
                        "label": "Show Status",
                        "type": "postback"
                    }
                ]
            },
            {
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9WkVt-bz07jUnsaFipxR5Ua47VpXSJ48riPJ0o05PDHGI7bywah5GWqX5JhAbblnVZA&usqp=CAU",
                "description": "Contest Number: 200002MV \nJob Family: Teacher",
                "title": "SUB, TEACHER ",
                "actions": [
                    {
                        "postback": {
                            "variables": {
                                "jobStatus": "Hired - External",
                                "jobStep": "Hire",
                                "jobCode": "200002MV",
                                "briefstatus": "Welcome to the CCSD team!",
                                "detailedstatus": "Welcome to the CCSD team! Be sure to reach out to your new location for your reporting time."
                            },
                            
                            "action": "showStatus",
                          
                        },
                        "label": "Show Status",
                        "type": "postback"
                    }
                ]
            },
            {
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9WkVt-bz07jUnsaFipxR5Ua47VpXSJ48riPJ0o05PDHGI7bywah5GWqX5JhAbblnVZA&usqp=CAU",
                "description": "Contest Number: 200002MV \nJob Family: Teacher",
                "title": "SUB, TEACHER ",
                "actions": [
                    {
                        "postback": {
                            "variables": {
                                "jobStatus": "Hired - External",
                                "jobStep": "Hire",
                                "jobCode": "200002MV",
                                "briefstatus": "Welcome to the CCSD team!",
                                "detailedstatus": "Welcome to the CCSD team! Be sure to reach out to your new location for your reporting time."
                            },
                            
                            "action": "showStatus",
                          
                        },
                        "label": "Show Status",
                        "type": "postback"
                    }
                ]
            },
            {
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9WkVt-bz07jUnsaFipxR5Ua47VpXSJ48riPJ0o05PDHGI7bywah5GWqX5JhAbblnVZA&usqp=CAU",
                "description": "Contest Number: 200002MV \nJob Family: Teacher",
                "title": "SUB, TEACHER ",
                "actions": [
                    {
                        "postback": {
                            "variables": {
                                "jobStatus": "Hired - External",
                                "jobStep": "Hire",
                                "jobCode": "200002MV",
                                "briefstatus": "Welcome to the CCSD team!",
                                "detailedstatus": "Welcome to the CCSD team! Be sure to reach out to your new location for your reporting time."
                            },
                            
                            "action": "showStatus",
                          
                        },
                        "label": "Show Status",
                        "type": "postback"
                    }
                ]
            }
          ]
  const fireCardAction = (detail: { action: CardAction }) => {
    (props as any).onCardAction?.(detail);
    if (!(props as any).onCardAction) {
      // fetch("/api/showStatus", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(detail.action.postback.variables)
      // });

      fetch("http://localhost:4000/api/job-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"email":"25866@invalidemail.com"})
      }).then((data)=>{
        console.log(detail.action.postback.variables)
      });
    }
  };

  return (
    <div class="oj-flex">
      <oj-conveyor-belt class="oj-lg-12 oj-md-12 oj-sm-12 oj-flex-item">
        {cards.map((card, i) => (
          <oj-action-card key={i} class="comp-slider-card">
            <div class="comp-slider-card-content">
              <oj-avatar size="lg" src={card.imageUrl}></oj-avatar>

              <span class="oj-typography-body-md oj-text-color-primary">
                {card.title}
              </span>

              <span class="oj-typography-body-sm oj-text-color-secondary oj-line-clamp-2">
                {card.description}
              </span>

              {card.actions?.[0] && (
                <oj-button
                  class="oj-sm-margin-2x-top"
                  onojAction={() => fireCardAction({ action: card.actions[0] })}
                >
                  {card.actions[0].label}
                </oj-button>
              )}
            </div>
          </oj-action-card>
        ))}
      </oj-conveyor-belt>
    </div>
  );
}

export const CompSlider = registerCustomElement("comp-slider", CompSliderImpl);
