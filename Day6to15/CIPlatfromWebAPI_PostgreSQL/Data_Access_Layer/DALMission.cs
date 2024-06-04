using Data_Access_Layer.Repository;
using Data_Access_Layer.Repository.Entities;
using Data_Access_Layer.Repository.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access_Layer
{
    public class DALMission
    {
        private readonly AppDbContext _cIDbContext;

        public DALMission(AppDbContext cIDbContext)
        {
            _cIDbContext = cIDbContext;
        }
        public List<Missions> MissionList()
        {
            return _cIDbContext.Missions.Where(x => !x.IsDeleted).ToList();
        }



        public async Task<Missions> GetMissionByIdAsync(int id)
        {
            return await _cIDbContext.Missions.Where(x => x.Id == id && !x.IsDeleted).FirstOrDefaultAsync();
        }

        public string AddMission(AddMissionModel mission)
        {
            string result = "";
            try
            {
                Missions missions = new Missions() 
                {
                    MissionTitle = mission.MissionTitle,
                    MissionDescription = mission.MissionDescription,
                    MissionOrganisationName = mission.MissionOrganisationName,
                    MissionOrganisationDetail = mission.MissionOrganisationDetail,
                    CountryId = mission.CountryId,
                    CityId = mission.CityId,
                    StartDate = mission.StartDate,
                    EndDate = mission.EndDate,
                    MissionType = mission.MissionType,
                    TotalSheets = mission.TotalSheets,
                    RegistrationDeadLine = mission.RegistrationDeadLine,
                    MissionThemeId = mission.MissionThemeId,
                    MissionSkillId = mission.MissionSkillId,
                    MissionImages = mission.MissionImages,
                    MissionDocuments = mission.MissionDocuments,
                    MissionAvilability = mission.MissionAvilability,
                    MissionVideoUrl = mission.MissionVideoUrl,
                    CreatedDate = DateTime.UtcNow,
                    IsDeleted = false
                };
                _cIDbContext.Missions.Add(missions);
                _cIDbContext.SaveChanges();
                result = "Mission Added Successfully!";
            }
            catch(Exception ex)
            {
                throw ex;
            }
            return result;
        }

        public async Task<string> UpdateMissionAsync(UpdateMissionModel mission)
        {
            string result = "";
            try
            {
                var existingMission = await _cIDbContext.Missions.Where(x => x.Id == mission.Id).FirstOrDefaultAsync();
                if(existingMission != null)
                {
                    existingMission.MissionTitle = mission.MissionTitle;
                    existingMission.MissionDescription = mission.MissionDescription;
                    existingMission.MissionOrganisationName = mission.MissionOrganisationName;
                    existingMission.MissionOrganisationDetail = mission.MissionOrganisationDetail;
                    existingMission.CountryId = mission.CountryId;
                    existingMission.CityId = mission.CityId;
                    existingMission.StartDate = mission.StartDate;
                    existingMission.EndDate = mission.EndDate;
                    existingMission.MissionType = mission.MissionType;
                    existingMission.TotalSheets = mission.TotalSheets;
                    existingMission.RegistrationDeadLine = mission.RegistrationDeadLine;
                    existingMission.MissionThemeId = mission.MissionThemeId;
                    existingMission.MissionSkillId = mission.MissionSkillId;
                    existingMission.MissionImages = mission.MissionImages;
                    existingMission.MissionDocuments = mission.MissionDocuments;
                    existingMission.MissionAvilability = mission.MissionAvilability;
                    existingMission.MissionVideoUrl = mission.MissionVideoUrl;
                    existingMission.ModifiedDate = DateTime.UtcNow;

                    await _cIDbContext.SaveChangesAsync();
                    result = "Mission Updated Successfully!";
                }
                else
                {
                    throw new Exception("Mission Not Found");
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error while updating mission.", ex);
            }
            return result;
        }

        public async Task<string> DeleteMissionAsync(int id)
        {
            string result = "";
            try
            {
                var existingMission = await _cIDbContext.Missions.Where(x => x.Id == id).FirstOrDefaultAsync();
                if(existingMission != null)
                {
                    existingMission.IsDeleted = true;
                    await _cIDbContext.SaveChangesAsync();
                    result = "Mission Deleted Successfully!";
                }
                else
                {
                    throw new Exception("Mission Not Found");
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error while deleting mission.", ex);
            }
            return result;
        }








        public async Task<List<MissionSkill>> GetMissionSkillsAsync()
        {
            return await _cIDbContext.MissionSkill.Where(x => !x.IsDeleted && x.Status != "inactive").ToListAsync();
        }
        public async Task<List<MissionTheme>> GetMissionThemesAsync()
        {
            return await _cIDbContext.MissionTheme.Where(x => !x.IsDeleted && x.Status != "inactive").ToListAsync();
        }
    }
}
