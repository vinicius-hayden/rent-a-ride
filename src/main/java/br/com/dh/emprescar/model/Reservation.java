package br.com.dh.emprescar.model;



public class Reservation {

    private Integer id;
    private String startHours;
    private String dateStart;
    private String dateFinish;

    public Reservation() {
    }

    public Reservation(Integer id, String startHours, String dateStart, String dateFinish) {
        this.id = id;
        this.startHours = startHours;
        this.dateStart = dateStart;
        this.dateFinish = dateFinish;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStartHours() {
        return startHours;
    }

    public void setStartHours(String startHours) {
        this.startHours = startHours;
    }

    public String getDateStart() {
        return dateStart;
    }

    public void setDateStart(String dateStart) {
        this.dateStart = dateStart;
    }

    public String getDateFinish() {
        return dateFinish;
    }

    public void setDateFinish(String dateFinish) {
        this.dateFinish = dateFinish;
    }
}
