
function reactLeads(leads) {
    let leads = [
        {"name": "John"},
        {"name": "Sarah"},
        {"name": "Mike"}
    ];

    return(
        leads.map((lead) => 
        <p>{lead.name}</p>
        ),
        leads.map((lead) => 
        <p>{lead.name}</p>
        ),
        leads.map((lead) => 
        <p>{lead.name}</p>

    )
)};